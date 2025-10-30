import { NavLink } from "react-router-dom";
import { Home, Search, CheckSquare, Info, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const { t } = useLanguage();
  
  const navItems = [
    { to: "/home", icon: Home, label: t('nav.home') },
    { to: "/browse", icon: Search, label: t('nav.browse') },
    { to: "/myaction", icon: CheckSquare, label: t('nav.myaction') },
    { to: "/about", icon: Info, label: t('nav.about') },
    { to: "/support", icon: MessageCircle, label: t('nav.support') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-elevated">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all duration-200",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
