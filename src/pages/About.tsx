import { Navigation } from "@/components/ui/navigation";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Heart, Zap, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pattern-dots pb-24 pt-14">
        {/* Header */}
        <header className="sticky top-14 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-foreground">{t('about.title')}</h1>
            <p className="text-muted-foreground mt-2">{t('about.missionDesc')}</p>
          </div>
        </header>

      <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Mission Statement */}
        <Card className="p-8 shadow-elevated space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BoldKhidma exists to transform good intentions into tangible impact. We believe that meaningful change
            doesn't require grand gestures—it requires focused, consistent action. One deed at a time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In a world of endless distractions and overwhelming causes, we offer clarity: <span className="font-semibold text-foreground">one action, done completely, with full presence and sincerity.</span>
          </p>
        </Card>

        {/* Why One Action */}
        <Card className="p-8 shadow-soft space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-gold" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Why One Action at a Time?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Modern life overwhelms us with options. Traditional charity platforms show hundreds of causes at once, 
            leaving us paralyzed or superficial. BoldKhidma cuts through the noise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When you focus on <span className="font-semibold text-foreground">one action</span>, you can give it your full attention, 
            complete it with excellence, and truly feel the barakah. This isn't about doing less—it's about doing <span className="font-semibold text-foreground">better</span>.
          </p>
        </Card>

        {/* Our Values */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center">Our Values</h2>
          
          <div className="grid gap-6">
            <Card className="p-6 shadow-soft hover:shadow-elevated transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground">Sincerity over Scale</h3>
                  <p className="text-sm text-muted-foreground">
                    We value one action done with pure intention over a thousand done mindlessly. 
                    Quality and presence matter more than quantity.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-elevated transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground">Completion over Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Finish what you start. We celebrate seeing one action through to the end, 
                    with reflection and gratitude.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-elevated transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground">Reflection over Rushing</h3>
                  <p className="text-sm text-muted-foreground">
                    After every action, we pause. We reflect on what we learned, 
                    renew our niyyah, and prepare our hearts for the next step.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Join */}
        <Card className="p-8 shadow-elevated text-center space-y-4 bg-gradient-primary">
          <h2 className="text-2xl font-bold text-foreground">Join the Movement</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            BoldKhidma is more than an app—it's a discipline, a practice, a way of life. 
            Together, we're proving that focused action, done with love and consistency, 
            can change the world one deed at a time.
          </p>
          <p className="text-sm text-muted-foreground italic">
            "The future of Khidma begins with one act."
          </p>
        </Card>
      </main>

      <Navigation />
    </div>
  </>
  );
};

export default About;
