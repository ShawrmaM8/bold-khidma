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
import { getHistory } from "@/utils/history";
import { useState, useEffect } from "react";

const Profile = () => {
  const [history, setHistory] = useState(getHistory());

  useEffect(() => {
    // Update history when user returns to profile
    setHistory(getHistory());
  }, []);

  const duaCount = history.filter(h => h.type === 'dua').length;
  const charityCount = history.filter(h => h.type === 'charity').length;
  const actionCount = history.filter(h => h.type === 'action').length;
  const uniqueCommunities = new Set(history.map(h => h.community)).size;

  const stats = [
    { label: "Prayers Made", value: duaCount.toString(), icon: Calendar, color: "text-primary" },
    { label: "Communities Supported", value: uniqueCommunities.toString(), icon: Heart, color: "text-red-500" },
    { label: "Actions Taken", value: actionCount.toString(), icon: Megaphone, color: "text-blue-500" },
    { label: "Impact Score", value: (duaCount + charityCount * 5 + actionCount * 3).toString(), icon: TrendingUp, color: "text-gold" },
  ];

  const streakDays = duaCount > 0 ? Math.min(duaCount, 28) : 0;

  const getIcon = (type: string) => {
    switch (type) {
      case 'dua': return Calendar;
      case 'charity': return Heart;
      case 'action': return Megaphone;
      default: return Calendar;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'dua': return 'text-primary';
      case 'charity': return 'text-red-500';
      case 'action': return 'text-blue-500';
      default: return 'text-primary';
    }
  };

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

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
          <h3 className="text-lg font-semibold mb-4 text-foreground">My History</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                Start making duas, supporting charities, and taking actions to see your impact here!
              </p>
            ) : (
              history.slice(0, 20).map((item) => {
                const Icon = getIcon(item.type);
                const iconColor = getIconColor(item.type);
                return (
                  <div key={item.id} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                    <div className={`p-2 ${iconColor.replace('text-', 'bg-')}/10 rounded-lg`}>
                      <Icon className={`h-4 w-4 ${iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{formatTimeAgo(item.timestamp)}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Profile;
