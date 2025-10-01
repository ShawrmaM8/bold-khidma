import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Heart, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <section className="gradient-hero pattern-islamic relative overflow-hidden py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            When Prayer Needed a Pathway to Action
          </h1>
          <p className="text-xl text-muted-foreground">
            This isn't just another app. It's the bridge we wished existed.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* The Problem */}
        <Card className="p-8 shadow-elevated animate-fade-in">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-destructive/10 rounded-lg">
              <Heart className="h-6 w-6 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mt-1">The Problem</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            "I kept seeing the same cycle: heartbreaking news → heartfelt prayers → helpless feeling. 
            We'd cry for Palestine, ache for Sudan, rage for Kashmir - then make dua and feel like that's 
            where our power ended. The spiritual and practical felt disconnected, and it was tearing at our 
            collective soul."
          </p>
        </Card>

        {/* The Turning Point */}
        <Card className="p-8 shadow-elevated animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gold/10 rounded-lg">
              <Zap className="h-6 w-6 text-gold" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mt-1">The Turning Point</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            "One night, watching another Gaza funeral stream, it hit me: What if our prayers could immediately 
            transform into protection? What if our tears could turn into tangible aid within minutes? Not just 
            charity, but coordinated spiritual warfare paired with real-world action?"
          </p>
        </Card>

        {/* The Solution */}
        <Card className="p-8 shadow-elevated animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mt-1">The Solution Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            "We built Ummah United as the missing link. Every curated dua is specifically adapted to the unique 
            oppression each community faces. Every prayer has an immediate action pathway. Every moment of 
            spiritual connection becomes practical solidarity."
          </p>
        </Card>

        {/* Interactive Timeline */}
        <Card className="p-8 shadow-elevated bg-gradient-to-br from-card to-muted/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">The Journey: Before & After</h3>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
                <span className="px-3 py-2 bg-destructive/10 text-destructive rounded-lg">See Suffering</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-destructive/10 text-destructive rounded-lg">Feel Pain</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-primary/10 text-primary rounded-lg">Make Dua</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-muted text-muted-foreground rounded-lg font-semibold">[MISSING BRIDGE]</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-muted text-muted-foreground rounded-lg">Create Change</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-12 w-0.5 bg-gradient-to-b from-muted to-primary" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
                <span className="px-3 py-2 bg-destructive/10 text-destructive rounded-lg">See Suffering</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-destructive/10 text-destructive rounded-lg">Feel Pain</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-primary/10 text-primary rounded-lg">Make Adapted Dua</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-gold text-gold-foreground rounded-lg font-semibold shadow-glow">TAKE ACTION</span>
                <span className="text-muted-foreground">→</span>
                <span className="px-3 py-2 bg-primary text-primary-foreground rounded-lg">Measurable Impact</span>
              </div>
            </div>
          </div>
        </Card>

        {/* How We Honor the Sacred */}
        <Card className="p-8 shadow-elevated animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold text-foreground mb-4">How We Honor the Sacred</h2>
          <p className="text-muted-foreground leading-relaxed">
            "We don't treat prayers like magic words. Each dua is carefully selected from authentic sources and 
            contextually adapted by scholars who understand both the spiritual weight and the ground reality. 
            This isn't about repeating words - it's about creating a living connection between your soul and 
            their struggle."
          </p>
        </Card>

        {/* Living App Concept */}
        <Card className="p-8 shadow-elevated bg-gradient-to-br from-primary/5 to-gold/5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">The Living App</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary animate-pulse" />
              <div>
                <h3 className="font-semibold text-foreground">Pulse Animation</h3>
                <p className="text-sm text-muted-foreground">Subtle heartbeat rhythm representing real-time prayers across timezones</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div>
                <h3 className="font-semibold text-foreground">Community Counter</h3>
                <p className="text-sm text-muted-foreground">"Right now, 1,423 people are praying for the same communities as you"</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '1s' }} />
              <div>
                <h3 className="font-semibold text-foreground">Impact Visualization</h3>
                <p className="text-sm text-muted-foreground">Growing light patterns that expand as more actions are completed</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Co-creation */}
        <Card className="p-8 shadow-elevated text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Call to Co-creation</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            "We're building this with the communities we serve. Your feedback directly shapes which charities 
            we verify, which actions matter most, and how we can better serve both those praying and those 
            suffering."
          </p>
          <Button size="lg" className="shadow-glow">
            <ExternalLink className="mr-2 h-5 w-5" />
            Share Your Thoughts
          </Button>
        </Card>

        {/* Closing Truth */}
        <Card className="p-8 shadow-elevated bg-gradient-to-br from-primary to-primary-light text-primary-foreground animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-lg leading-relaxed text-center">
            "This app exists because silence isn't an option and prayer without action feels incomplete. 
            Join us in building something that honors both the spiritual and the practical - because our 
            Ummah deserves both."
          </p>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default About;
