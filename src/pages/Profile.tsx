import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Heart, 
  Megaphone, 
  TrendingUp, 
  Settings,
  Flame
} from "lucide-react";

const Profile = () => {
  const stats = [
    { label: "Prayers Made", value: "127", icon: Calendar, color: "text-primary" },
    { label: "Communities Supported", value: "8", icon: Heart, color: "text-red-500" },
    { label: "Actions Taken", value: "34", icon: Megaphone, color: "text-blue-500" },
    { label: "Impact Score", value: "892", icon: TrendingUp, color: "text-gold" },
  ];

  const streakDays = 15;

  return (
    <div className="min-h-screen bg-background pattern-dots pb-24">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Profile</h1>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-4 border-primary-foreground/20">
              <AvatarFallback className="bg-gold text-gold-foreground text-2xl font-bold">
                U
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">Ummah Member</h2>
              <p className="text-sm text-primary-foreground/80">
                Making a difference since January 2025
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-gold text-gold-foreground">
                  <Flame className="h-3 w-3 mr-1" />
                  {streakDays} Day Streak
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-2">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Prayer Calendar */}
        <Card className="p-6 shadow-soft animate-fade-in-up">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Prayer Calendar</h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-200 ${
                  i < streakDays
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Keep your streak going! 🔥
          </p>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 shadow-soft animate-fade-in-up">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Impact</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b border-border">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Made dua for Palestine</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 pb-3 border-b border-border">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Heart className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Donated to Syria Emergency Response</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Megaphone className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Signed petition for humanitarian aid</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Profile;
