import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Share2, FileText, Clock, Zap } from "lucide-react";
import { toast } from "sonner";

interface ActionCardProps {
  title: string;
  description: string;
  effort: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  urgency: "low" | "medium" | "high";
  actionType: "email" | "social" | "petition";
  community: string;
}

export const ActionCard = ({
  title,
  description,
  effort,
  impact,
  urgency,
  actionType,
  community,
}: ActionCardProps) => {
  const getEffortColor = (level: string) => {
    switch (level) {
      case "low": return "text-green-600 bg-green-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "high": return "text-red-600 bg-red-50";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const getActionIcon = () => {
    switch (actionType) {
      case "email": return <Mail className="h-4 w-4" />;
      case "social": return <Share2 className="h-4 w-4" />;
      case "petition": return <FileText className="h-4 w-4" />;
    }
  };

  const handleAction = () => {
    toast.success(`${title} action initiated!`);
  };

  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 bg-card">
      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">
              {title}
            </h3>
            <Badge variant="outline" className="text-xs">
              {community}
            </Badge>
          </div>
          {urgency === "high" && (
            <Badge variant="destructive" className="text-xs">
              Urgent
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span className={getEffortColor(effort)}>
              {effort.charAt(0).toUpperCase() + effort.slice(1)} Effort
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            <span className="text-primary font-medium">
              {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
            </span>
          </div>
        </div>

        <Button
          onClick={handleAction}
          className="w-full"
          variant="default"
        >
          {getActionIcon()}
          <span className="ml-2">Take Action</span>
        </Button>
      </div>
    </Card>
  );
};
