import { Moon, Sun, Languages } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export const SettingsPanel = () => {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="fixed top-16 right-4 z-30 bg-card border border-border rounded-lg shadow-elevated p-4 space-y-4 min-w-[200px]">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="theme-toggle" className="flex items-center gap-2">
          {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          <span>{t('settings.theme')}</span>
        </Label>
        <Switch
          id="theme-toggle"
          checked={theme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
      </div>

      {/* Language Toggle */}
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="language-toggle" className="flex items-center gap-2">
          <Languages className="w-4 h-4" />
          <span>{t('settings.language')}</span>
        </Label>
        <Switch
          id="language-toggle"
          checked={language === 'ar'}
          onCheckedChange={toggleLanguage}
        />
      </div>
      
      <div className="text-xs text-muted-foreground pt-2 border-t border-border">
        {language === 'ar' ? 'عربي / English' : 'English / عربي'}
      </div>
    </div>
  );
};
