import { ActionCard } from "@/components/ActionCard";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const actions = [
  {
    title: "Email Your Representative",
    description: "Send a pre-written email advocating for humanitarian aid to conflict zones.",
    effort: "low" as const,
    impact: "high" as const,
    urgency: "high" as const,
    actionType: "email" as const,
    community: "Palestine",
  },
  {
    title: "Share Awareness Campaign",
    description: "Amplify voices by sharing verified information about ongoing humanitarian crises.",
    effort: "low" as const,
    impact: "medium" as const,
    urgency: "medium" as const,
    actionType: "social" as const,
    community: "Syria",
  },
  {
    title: "Sign Emergency Petition",
    description: "Add your signature to demand immediate ceasefire and humanitarian corridor access.",
    effort: "low" as const,
    impact: "high" as const,
    urgency: "high" as const,
    actionType: "petition" as const,
    community: "Yemen",
  },
  {
    title: "Contact Media Outlets",
    description: "Request fair coverage of underreported humanitarian situations affecting Muslim communities.",
    effort: "medium" as const,
    impact: "high" as const,
    urgency: "medium" as const,
    actionType: "email" as const,
    community: "Rohingya",
  },
  {
    title: "Boycott Campaign",
    description: "Join economic pressure campaigns supporting justice and human rights.",
    effort: "medium" as const,
    impact: "medium" as const,
    urgency: "medium" as const,
    actionType: "social" as const,
    community: "Palestine",
  },
  {
    title: "Local Community Event",
    description: "Organize or attend solidarity events to raise awareness in your community.",
    effort: "high" as const,
    impact: "high" as const,
    urgency: "low" as const,
    actionType: "petition" as const,
    community: "General",
  },
];

const Actions = () => {
  return (
    <div className="min-h-screen bg-background pattern-dots pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Action Generator</h1>
                <p className="text-sm text-muted-foreground">Turn compassion into concrete action</p>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            
            {/* Filter chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Badge variant="default" className="cursor-pointer">All Actions</Badge>
              <Badge variant="outline" className="cursor-pointer">Urgent</Badge>
              <Badge variant="outline" className="cursor-pointer">Low Effort</Badge>
              <Badge variant="outline" className="cursor-pointer">High Impact</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Actions Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {actions.map((action, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ActionCard {...action} />
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Actions;
