import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/ui/navigation";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Support = () => {
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
    toast.success("Thank you for your feedback! We'll respond soon.");
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background pattern-dots pb-24">
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Support</h1>
          <p className="text-muted-foreground mt-2">We'd love to hear from you</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <Card className="p-8 shadow-elevated space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground">
              Your feedback helps us improve BoldKhidma and serve the community better.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts, suggestions, or concerns..."
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
              Send Message
            </Button>
          </form>

          <div className="pt-6 border-t space-y-3">
            <h3 className="font-semibold text-foreground">Other Ways to Reach Us</h3>
            <p className="text-sm text-muted-foreground">
              Email us directly at: <span className="font-medium text-foreground">support@boldkhidma.org</span>
            </p>
          </div>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Support;
