import { CharityCard } from "@/components/CharityCard";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const charities = [
  {
    name: "Palestine Children's Relief",
    community: "Palestine",
    description: "Providing medical care and humanitarian aid to Palestinian children in crisis zones.",
    verified: true,
    impactMetric: "10,000+ children helped",
    category: "Emergency",
  },
  {
    name: "Syria Emergency Response",
    community: "Syria",
    description: "Delivering emergency food, shelter, and medical supplies to displaced Syrian families.",
    verified: true,
    impactMetric: "50,000+ families supported",
    category: "Emergency",
  },
  {
    name: "Yemen Water Project",
    community: "Yemen",
    description: "Building clean water wells and sanitation facilities in rural Yemeni villages.",
    verified: true,
    impactMetric: "200+ wells constructed",
    category: "Water",
  },
  {
    name: "Rohingya Refugee Aid",
    community: "Rohingya",
    description: "Supporting Rohingya refugees with education, healthcare, and livelihood programs.",
    verified: true,
    impactMetric: "15,000+ refugees assisted",
    category: "Education",
  },
  {
    name: "East Africa Drought Relief",
    community: "Somalia",
    description: "Emergency food distribution and agricultural support during severe drought conditions.",
    verified: true,
    impactMetric: "30,000+ people fed",
    category: "Emergency",
  },
  {
    name: "Kashmir Education Initiative",
    community: "Kashmir",
    description: "Providing quality education and school supplies to children in conflict zones.",
    verified: true,
    impactMetric: "5,000+ students enrolled",
    category: "Education",
  },
  {
    name: "Uyghur Healthcare Support",
    community: "Uyghur",
    description: "Medical assistance and mental health support for displaced Uyghur families.",
    verified: true,
    impactMetric: "8,000+ treated",
    category: "Healthcare",
  },
];

type FilterType = "All Communities" | "Emergency" | "Education" | "Healthcare" | "Water";

const Charity = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Communities");

  const filteredCharities = charities.filter(charity => {
    if (activeFilter === "All Communities") return true;
    return charity.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-background pattern-dots pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Charity Hub</h1>
                <p className="text-sm text-muted-foreground">
                  {activeFilter === "All Communities" 
                    ? "Verified organizations making real impact"
                    : `Showing ${activeFilter} charities`
                  }
                </p>
              </div>
            </div>
            
            {/* Filter chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Badge 
                variant={activeFilter === "All Communities" ? "default" : "outline"} 
                className="cursor-pointer"
                onClick={() => setActiveFilter("All Communities")}
              >
                All Communities
              </Badge>
              <Badge 
                variant={activeFilter === "Emergency" ? "default" : "outline"} 
                className="cursor-pointer"
                onClick={() => setActiveFilter("Emergency")}
              >
                Emergency
              </Badge>
              <Badge 
                variant={activeFilter === "Education" ? "default" : "outline"} 
                className="cursor-pointer"
                onClick={() => setActiveFilter("Education")}
              >
                Education
              </Badge>
              <Badge 
                variant={activeFilter === "Healthcare" ? "default" : "outline"} 
                className="cursor-pointer"
                onClick={() => setActiveFilter("Healthcare")}
              >
                Healthcare
              </Badge>
              <Badge 
                variant={activeFilter === "Water" ? "default" : "outline"} 
                className="cursor-pointer"
                onClick={() => setActiveFilter("Water")}
              >
                Water
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Charities Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {filteredCharities.map((charity, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CharityCard {...charity} />
            </div>
          ))}
        </div>
        {filteredCharities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No charities found for this category.</p>
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
};

export default Charity;
