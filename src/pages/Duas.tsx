import { DuaCard } from "@/components/DuaCard";
import { Navigation } from "@/components/ui/navigation";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const duasList = [
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    translation: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    source: "Quran 2:201",
    community: "Palestine",
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-huzn",
    translation: "O Allah, I seek refuge in You from worry and grief.",
    source: "Sahih Bukhari",
    community: "Syria",
  },
  {
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    transliteration: "Rabbi ishrah li sadri wa yassir li amri",
    translation: "My Lord, expand for me my breast [with assurance] and ease for me my task.",
    source: "Quran 20:25-26",
    community: "Yemen",
  },
  {
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
    transliteration: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduka",
    translation: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant.",
    source: "Sahih Bukhari",
    community: "Rohingya",
  },
];

const Duas = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    toast.success("Loading new duas...");
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pattern-dots pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Daily Duas</h1>
              <p className="text-sm text-muted-foreground">Prayers for communities in need</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              disabled={refreshing}
              className={refreshing ? "animate-spin" : ""}
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Duas Feed */}
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6 animate-fade-in-up">
        {duasList.map((dua, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <DuaCard {...dua} />
          </div>
        ))}
      </main>

      <Navigation />
    </div>
  );
};

export default Duas;
