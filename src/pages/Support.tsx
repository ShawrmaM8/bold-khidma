import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/ui/navigation";
import { Header } from "@/components/Header";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Support = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Backend integration - Supabase edge function
    // Expected endpoint: /api/support-feedback
    // Expected payload: { name, email, message, timestamp }
    // Expected response: { success: boolean, message: string }
    
    console.log("Feedback submitted:", formData);
    toast.success(t('support.success'));
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pattern-dots pb-24 pt-14">
        <header className="sticky top-14 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-foreground">{t('support.title')}</h1>
            <p className="text-muted-foreground mt-2">{t('support.subtitle')}</p>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-12">
          <Card className="p-8 shadow-elevated space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{t('support.title')}</h2>
              <p className="text-muted-foreground">
                {t('support.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('support.name')}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('support.namePlaceholder')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('support.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('support.emailPlaceholder')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('support.message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('support.messagePlaceholder')}
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90"
              >
                <Send className="w-5 h-5 mr-2" />
                {t('support.submit')}
              </Button>
            </form>

            <div className="pt-6 border-t space-y-3">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Email: <span className="font-medium text-foreground">support@boldkhidma.org</span>
              </p>
            </div>
          </Card>
        </main>

        <Navigation />
      </div>
    </>
  );
};

export default Support;
