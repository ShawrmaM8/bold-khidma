import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Heart, TrendingUp } from "lucide-react";
import { toast } from "sonner";

interface CharityCardProps {
  name: string;
  community: string;
  description: string;
  verified: boolean;
  impactMetric: string;
  image?: string;
}

export const CharityCard = ({
  name,
  community,
  description,
  verified,
  impactMetric,
  image,
}: CharityCardProps) => {
  const handleDonate = () => {
    toast.success(`Thank you for supporting ${name}!`);
  };

  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 bg-card group">
      {image && (
        <div className="h-40 bg-muted overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg text-foreground">{name}</h3>
              {verified && (
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              )}
            </div>
            <Badge variant="outline" className="text-xs">
              {community}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm text-primary">
          <TrendingUp className="h-4 w-4" />
          <span className="font-medium">{impactMetric}</span>
        </div>

        <Button
          onClick={handleDonate}
          className="w-full group-hover:shadow-glow transition-all duration-300"
          variant="default"
        >
          <Heart className="mr-2 h-4 w-4" />
          Quick Donate
        </Button>
      </div>
    </Card>
  );
};
