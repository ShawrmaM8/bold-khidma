import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Zap } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleStartAction = () => {
    navigate("/browse");
  };

  // Mock global stats
  const stats = [
    { icon: Heart, label: "Total Barakah Points", value: "127,845" },
    { icon: Users, label: "Active Contributors", value: "3,429" },
    { icon: Zap, label: "Actions Completed", value: "8,912" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-hero pattern-dots">
      <div className="max-w-4xl w-full space-y-12 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            The future of Khidma<br />begins with one act
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build meaningful impact through focused action. One deed at a time.
          </p>

          <Button
            onClick={handleStartAction}
            size="lg"
            className="px-12 text-lg shadow-elevated hover:shadow-glow transition-all duration-300 bg-gold hover:bg-gold/90"
          >
            Start Your First Action
          </Button>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center space-y-3 shadow-soft hover:shadow-elevated transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Subtle Call to Focus */}
        <p className="text-center text-sm text-muted-foreground italic">
          Focus on one action. Complete it fully. Feel the barakah.
        </p>
      </div>
    </div>
  );
};

export default Home;
