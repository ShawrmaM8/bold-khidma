import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import heroCalligraphy from "@/assets/hero-calligraphy.jpg";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleBeginJourney = () => {
    navigate("/duas");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-hero pattern-islamic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl" />
      
      <Card className="w-full max-w-2xl shadow-elevated overflow-hidden animate-scale-in bg-card/95 backdrop-blur-sm">
        {/* Hero Image with Calligraphy */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={heroCalligraphy}
            alt="Islamic Calligraphy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>

        <div className="p-8 md:p-12 space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Ummah United
            </h1>
            <p className="text-xl text-gradient-gold font-medium">
              Transform Prayer into Action
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Join a global community turning spiritual practice into tangible impact. 
            Make duas, support causes, and advocate for communities in need.
          </p>

          <div className="pt-4 space-y-3">
            <Button
              onClick={handleBeginJourney}
              size="lg"
              className="w-full md:w-auto px-12 text-base shadow-glow hover:shadow-elevated transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Begin Journey
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Prayer reminders • Community impact • Verified charities
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;
