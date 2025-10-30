import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Zap, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { SettingsPanel } from "@/components/SettingsPanel";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);
  const [livesChanged, setLivesChanged] = useState(0);

  useEffect(() => {
    // Calculate lives changed from donation history
    const history = localStorage.getItem('boldkhidma_history');
    if (history) {
      const items = JSON.parse(history);
      const donationCount = items.filter((item: any) => item.type === 'charity').length;
      setLivesChanged(donationCount);
    }
  }, []);

  const handleStartAction = () => {
    navigate("/browse");
  };

  // Mock global stats
  const stats = [
    { icon: Heart, label: t('home.totalBarakah'), value: "127,845" },
    { icon: Users, label: t('home.activeContributors'), value: "3,429" },
    { icon: Zap, label: t('home.actionsCompleted'), value: "8,912" },
  ];

  return (
    <>
      <Header />
      
      {/* Settings Toggle Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-card hover:bg-muted transition-colors shadow-soft"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      {showSettings && <SettingsPanel />}

      <div className="min-h-screen flex items-center justify-center p-4 pt-20 gradient-hero pattern-dots">
        <div className="max-w-4xl w-full space-y-12 animate-fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              {t('home.headline')}<br />{t('home.headline2')}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>

            <Button
              onClick={handleStartAction}
              size="lg"
              className="px-12 text-lg shadow-elevated hover:shadow-glow transition-all duration-300 bg-gold hover:bg-gold/90"
            >
              {t('home.cta')}
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
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground italic">
              {t('home.focus')}
            </p>
            
            {/* Lives Changed Counter */}
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-gold animate-pulse" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">{livesChanged}</div>
                <div className="text-sm text-muted-foreground">{t('home.livesChanged')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
