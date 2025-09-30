import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface DuaCardProps {
  arabic: string;
  transliteration: string;
  translation: string;
  source: string;
  community: string;
  communityColor?: string;
}

export const DuaCard = ({
  arabic,
  transliteration,
  translation,
  source,
  community,
  communityColor = "primary",
}: DuaCardProps) => {
  const [prayed, setPrayed] = useState(false);

  const handlePrayerConfirmation = () => {
    setPrayed(true);
    toast.success("Prayer recorded! May it be accepted.");
    setTimeout(() => setPrayed(false), 3000);
  };

  const handleShare = () => {
    toast.success("Dua copied to clipboard!");
  };

  return (
    <Card className="relative overflow-hidden shadow-elevated hover:shadow-glow transition-all duration-300 bg-card">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pattern-islamic" />
      
      <div className="p-6 space-y-4">
        {/* Community Badge */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {community}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Arabic Text */}
        <div className="text-right">
          <p className="text-2xl md:text-3xl leading-loose font-medium text-primary" dir="rtl">
            {arabic}
          </p>
        </div>

        {/* Transliteration */}
        <div className="pt-2 border-t border-border/50">
          <p className="text-sm italic text-muted-foreground leading-relaxed">
            {transliteration}
          </p>
        </div>

        {/* Translation */}
        <div className="pt-2">
          <p className="text-base text-foreground leading-relaxed">
            {translation}
          </p>
        </div>

        {/* Source */}
        <div className="pt-2">
          <p className="text-xs text-muted-foreground">
            Source: {source}
          </p>
        </div>

        {/* Prayer Confirmation Button */}
        <Button
          onClick={handlePrayerConfirmation}
          disabled={prayed}
          className={cn(
            "w-full mt-4 transition-all duration-300",
            prayed && "bg-primary animate-prayer-pulse"
          )}
          variant={prayed ? "default" : "outline"}
        >
          {prayed ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Prayer Recorded
            </>
          ) : (
            "I've Made This Dua"
          )}
        </Button>
      </div>
    </Card>
  );
};

function cn(...args: any[]) {
  return args.filter(Boolean).join(" ");
}
