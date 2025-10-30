import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/ui/navigation";
import { Header } from "@/components/Header";
import { CheckCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { useLanguage } from "@/contexts/LanguageContext";

interface ActiveAction {
  id: string;
  title: string;
  country: string;
  causeType: string;
  steps: string[];
  impactMetrics: {
    people: number;
    duration: string;
  };
}

const quranVerses = [
  { arabic: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ", translation: "Whoever does an atom's weight of good will see it." },
  { arabic: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", translation: "Indeed, Allah does not allow to be lost the reward of those who do good." },
  { arabic: "فَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ وَهُوَ مُؤْمِنٌ فَلَا كُفْرَانَ لِسَعْيِهِ", translation: "Whoever does righteous deeds while a believer - there is no denial of his effort." }
];

const MyAction = () => {
  const { t } = useLanguage();
  const [activeAction, setActiveAction] = useState<ActiveAction | null>(null);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([]);
  const [reflection, setReflection] = useState("");
  const [showCompletion, setShowCompletion] = useState(false);
  const [barakahPoints, setBarakahPoints] = useState(0);
  const [selectedVerse, setSelectedVerse] = useState(quranVerses[0]);

  useEffect(() => {
    // Load active action from localStorage
    const stored = localStorage.getItem('boldkhidma_active_action');
    if (stored) {
      const action = JSON.parse(stored);
      setActiveAction(action);
      setCompletedSteps(new Array(action.steps.length).fill(false));
    }

    // Load barakah points
    const points = localStorage.getItem('boldkhidma_barakah_points');
    if (points) setBarakahPoints(parseInt(points));
  }, []);

  useEffect(() => {
    if (activeAction) {
      const completed = completedSteps.filter(Boolean).length;
      setProgress((completed / activeAction.steps.length) * 100);
    }
  }, [completedSteps, activeAction]);

  const handleStepToggle = (index: number) => {
    const newSteps = [...completedSteps];
    newSteps[index] = !newSteps[index];
    setCompletedSteps(newSteps);
  };

  const handleComplete = () => {
    if (completedSteps.every(Boolean)) {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Calculate barakah points (50-100 based on action complexity)
      const points = Math.floor(Math.random() * 51) + 50;
      const newTotal = barakahPoints + points;
      setBarakahPoints(newTotal);
      localStorage.setItem('boldkhidma_barakah_points', newTotal.toString());
      
      // Trigger event to update barakah display
      window.dispatchEvent(new Event('barakah-updated'));

      // Random Quran verse
      const randomVerse = quranVerses[Math.floor(Math.random() * quranVerses.length)];
      setSelectedVerse(randomVerse);

      // Save to history
      const history = JSON.parse(localStorage.getItem('boldkhidma_history') || '[]');
      history.push({
        ...activeAction,
        completedAt: new Date().toISOString(),
        reflection,
        pointsEarned: points
      });
      localStorage.setItem('boldkhidma_history', JSON.stringify(history));

      setShowCompletion(true);
      toast.success(`+${points} Barakah Points!`);
    } else {
      toast.error("Please complete all steps first");
    }
  };

  const handleStartNew = () => {
    localStorage.removeItem('boldkhidma_active_action');
    setActiveAction(null);
    setCompletedSteps([]);
    setReflection("");
    setShowCompletion(false);
    window.location.href = '/browse';
  };

  if (!activeAction) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pattern-dots pb-24 pt-14 flex items-center justify-center">
          <Card className="max-w-md p-12 text-center space-y-6 shadow-elevated">
            <div className="w-20 h-20 rounded-full bg-muted mx-auto flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{t('myaction.noAction')}</h2>
              <p className="text-muted-foreground">{t('myaction.noActionDesc')}</p>
            </div>
            <Button onClick={() => window.location.href = '/browse'} className="bg-gold hover:bg-gold/90">
              {t('myaction.goToBrowse')}
            </Button>
          </Card>
          <Navigation />
        </div>
      </>
    );
  }

  if (showCompletion) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pattern-dots pb-24 pt-14 flex items-center justify-center p-4">
          <Card className="max-w-2xl p-12 text-center space-y-8 shadow-elevated animate-scale-in">
            {/* Barakah Points Animation */}
            <div className="space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-completion mx-auto flex items-center justify-center shadow-glow animate-prayer-pulse">
                <Sparkles className="w-12 h-12 text-gold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{t('myaction.congratulations')}</h2>
              <p className="text-xl text-gold font-semibold">+{barakahPoints} {t('myaction.barakahEarned')}</p>
            </div>

            {/* Quran Verse */}
            <div className="bg-cream/50 rounded-lg p-6 space-y-3">
              <p className="text-2xl font-arabic text-foreground" dir="rtl">{selectedVerse.arabic}</p>
              <p className="text-muted-foreground italic">{selectedVerse.translation}</p>
            </div>

            {/* Reflection Display */}
            {reflection && (
              <div className="bg-card border border-border rounded-lg p-6 text-left">
                <h3 className="font-semibold text-foreground mb-2">{t('myaction.reflection')}:</h3>
                <p className="text-muted-foreground italic">"{reflection}"</p>
              </div>
            )}

            {/* Impact Summary */}
            <div className="text-sm text-muted-foreground space-y-1">
              <p>{t('browse.impact')}: <span className="font-bold text-foreground">{activeAction.impactMetrics.people} people</span></p>
              <p>Duration: <span className="font-bold text-foreground">{activeAction.impactMetrics.duration}</span></p>
            </div>

            <Button onClick={handleStartNew} size="lg" className="bg-gold hover:bg-gold/90">
              {t('myaction.goToBrowse')}
            </Button>
          </Card>
          <Navigation />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pattern-dots pb-24 pt-14">
        {/* Header */}
        <header className="sticky top-14 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-foreground">{t('myaction.title')}</h1>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-lg font-bold text-foreground">{barakahPoints}</span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              {completedSteps.filter(Boolean).length} of {activeAction.steps.length} {t('myaction.steps').toLowerCase()}
            </p>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
          {/* Action Details */}
          <Card className="p-6 shadow-elevated space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{activeAction.title}</h2>
              <div className="flex gap-2">
                <Badge variant="secondary">{activeAction.country}</Badge>
                <Badge variant="outline">{activeAction.causeType}</Badge>
              </div>
            </div>

            {/* Steps Checklist */}
            <div className="space-y-3 pt-4">
              <h3 className="font-semibold text-foreground">{t('myaction.steps')}:</h3>
            {activeAction.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer"
                onClick={() => handleStepToggle(idx)}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  completedSteps[idx] ? 'bg-gold border-gold' : 'border-muted-foreground'
                }`}>
                  {completedSteps[idx] && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span className={`flex-1 ${completedSteps[idx] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Reflection Input */}
        <Card className="p-6 shadow-soft space-y-3">
          <h3 className="font-semibold text-foreground">{t('myaction.reflection')}</h3>
          <Textarea
            placeholder={t('myaction.reflectionPlaceholder')}
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            className="min-h-[100px]"
          />
        </Card>

        {/* Complete Button */}
        <Button
          onClick={handleComplete}
          size="lg"
          className="w-full bg-gold hover:bg-gold/90 shadow-elevated"
          disabled={!completedSteps.every(Boolean)}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          {t('myaction.markComplete')}
        </Button>
      </main>

      <Navigation />
    </div>
  </>
  );
};

export default MyAction;
