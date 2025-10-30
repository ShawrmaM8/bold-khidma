import { Coins } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [barakahPoints, setBarakahPoints] = useState(0);

  useEffect(() => {
    const points = localStorage.getItem('boldkhidma_barakah_points');
    setBarakahPoints(points ? parseInt(points) : 0);
    
    // Listen for barakah points updates
    const handleStorageChange = () => {
      const points = localStorage.getItem('boldkhidma_barakah_points');
      setBarakahPoints(points ? parseInt(points) : 0);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('barakah-updated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('barakah-updated', handleStorageChange);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-end">
        <div className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full">
          <Coins className="w-5 h-5 text-gold" />
          <span className="font-bold text-gold">{barakahPoints.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
