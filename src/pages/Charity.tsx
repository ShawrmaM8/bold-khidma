import { CharityCard } from "@/components/CharityCard";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const charities = [
  {
    name: "Palestine Children's Relief",
    community: "Palestine",
    description: "Providing medical care and humanitarian aid to Palestinian children in crisis zones.",
    verified: true,
    impactMetric: "10,000+ children helped",
  },
  {
    name: "Syria Emergency Response",
    community: "Syria",
    description: "Delivering emergency food, shelter, and medical supplies to displaced Syrian families.",
    verified: true,
    impactMetric: "50,000+ families supported",
  },
  {
    name: "Yemen Water Project",
    community: "Yemen",
    description: "Building clean water wells and sanitation facilities in rural Yemeni villages.",
    verified: true,
    impactMetric: "200+ wells constructed",
  },
  {
    name: "Rohingya Refugee Aid",
    community: "Rohingya",
    description: "Supporting Rohingya refugees with education, healthcare, and livelihood programs.",
    verified: true,
    impactMetric: "15,000+ refugees assisted",
  },
  {
    name: "East Africa Drought Relief",
    community: "Somalia",
    description: "Emergency food distribution and agricultural support during severe drought conditions.",
    verified: true,
    impactMetric: "30,000+ people fed",
  },
];

const Charity = () => {
  return (
    <div className="min-h-screen bg-background pattern-dots pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Charity Hub</h1>
                <p className="text-sm text-muted-foreground">Verified organizations making real impact</p>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            
            {/* Filter chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Badge variant="default" className="cursor-pointer">All Communities</Badge>
              <Badge variant="outline" className="cursor-pointer">Emergency</Badge>
              <Badge variant="outline" className="cursor-pointer">Education</Badge>
              <Badge variant="outline" className="cursor-pointer">Healthcare</Badge>
              <Badge variant="outline" className="cursor-pointer">Water</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Charities Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {charities.map((charity, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CharityCard {...charity} />
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Charity;
