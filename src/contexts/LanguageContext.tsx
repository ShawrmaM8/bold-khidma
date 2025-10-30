import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.browse': 'Browse',
    'nav.myaction': 'MyAction',
    'nav.about': 'About',
    'nav.support': 'Support',
    
    // Home Page
    'home.headline': 'The future of Khidma',
    'home.headline2': 'begins with one act',
    'home.subtitle': 'Build meaningful impact through focused action. One deed at a time.',
    'home.cta': 'Start Your First Action',
    'home.totalBarakah': 'Total Barakah Points',
    'home.activeContributors': 'Active Contributors',
    'home.actionsCompleted': 'Actions Completed',
    'home.focus': 'Focus on one action. Complete it fully. Feel the barakah.',
    'home.livesChanged': 'Lives Changed!',
    
    // Browse Page
    'browse.title': 'Find Your Next Action',
    'browse.subtitle': 'One focused deed. Real impact.',
    'browse.filterCountry': 'Filter by Country',
    'browse.allCountries': 'All Countries',
    'browse.filterCause': 'Filter by Cause',
    'browse.allCauses': 'All Causes',
    'browse.medical': 'Medical',
    'browse.foodWater': 'Food/Water',
    'browse.education': 'Education',
    'browse.clothes': 'Clothes',
    'browse.orphans': 'Orphans',
    'browse.impact': 'Impact',
    'browse.donate': 'Donate via GoFundMe',
    'browse.addToMyAction': 'Add to MyAction',
    'browse.noActions': 'No actions match your filters. Try adjusting your selection.',
    
    // MyAction Page
    'myaction.title': 'Your Active Action',
    'myaction.noAction': 'No Active Action',
    'myaction.noActionDesc': 'Visit Browse to select your next focused deed.',
    'myaction.goToBrowse': 'Go to Browse',
    'myaction.steps': 'Steps',
    'myaction.markComplete': 'Mark as Complete',
    'myaction.completeStep': 'Complete Step',
    'myaction.congratulations': 'Mubarak! Action Completed',
    'myaction.barakahEarned': 'Barakah Points Earned',
    'myaction.verse': 'Qur\'anic Reflection',
    'myaction.reflection': 'Your Reflection & Niyyah',
    'myaction.reflectionPlaceholder': 'What did you learn? What was your intention?',
    'myaction.finishReflection': 'Finish & Close',
    'myaction.streak': 'day streak!',
    
    // About Page
    'about.title': 'Our Story: From Heart to Action',
    'about.mission': 'When Prayer Needed a Pathway to Action',
    'about.missionDesc': 'This isn\'t just another app. It\'s the bridge we wished existed.',
    
    // Support Page
    'support.title': 'We\'re Here to Help',
    'support.subtitle': 'Your feedback shapes our community',
    'support.name': 'Name',
    'support.namePlaceholder': 'Your name',
    'support.email': 'Email',
    'support.emailPlaceholder': 'your@email.com',
    'support.message': 'Message',
    'support.messagePlaceholder': 'Share your thoughts, report issues, or suggest features...',
    'support.submit': 'Send Message',
    'support.success': 'Thank you! Your message has been received.',
    
    // Settings
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.browse': 'تصفح',
    'nav.myaction': 'عملي',
    'nav.about': 'حولنا',
    'nav.support': 'الدعم',
    
    // Home Page
    'home.headline': 'مستقبل الخدمة',
    'home.headline2': 'يبدأ بفعل واحد',
    'home.subtitle': 'اصنع أثراً حقيقياً من خلال العمل المركز. عمل واحد في كل مرة.',
    'home.cta': 'ابدأ عملك الأول',
    'home.totalBarakah': 'إجمالي نقاط البركة',
    'home.activeContributors': 'المساهمون النشطون',
    'home.actionsCompleted': 'الأعمال المكتملة',
    'home.focus': 'ركز على عمل واحد. أكمله بالكامل. اشعر بالبركة.',
    'home.livesChanged': '!حياة تغيرت',
    
    // Browse Page
    'browse.title': 'اعثر على عملك التالي',
    'browse.subtitle': 'عمل واحد مركز. أثر حقيقي.',
    'browse.filterCountry': 'تصفية حسب الدولة',
    'browse.allCountries': 'كل الدول',
    'browse.filterCause': 'تصفية حسب القضية',
    'browse.allCauses': 'كل القضايا',
    'browse.medical': 'طبي',
    'browse.foodWater': 'طعام/ماء',
    'browse.education': 'تعليم',
    'browse.clothes': 'ملابس',
    'browse.orphans': 'أيتام',
    'browse.impact': 'الأثر',
    'browse.donate': 'تبرع عبر GoFundMe',
    'browse.addToMyAction': 'أضف إلى عملي',
    'browse.noActions': 'لا توجد أعمال تطابق الفلاتر. حاول تعديل اختيارك.',
    
    // MyAction Page
    'myaction.title': 'عملك النشط',
    'myaction.noAction': 'لا يوجد عمل نشط',
    'myaction.noActionDesc': 'قم بزيارة تصفح لاختيار عملك المركز التالي.',
    'myaction.goToBrowse': 'اذهب إلى تصفح',
    'myaction.steps': 'الخطوات',
    'myaction.markComplete': 'تحديد كمكتمل',
    'myaction.completeStep': 'إكمال الخطوة',
    'myaction.congratulations': '!مبروك! تم إكمال العمل',
    'myaction.barakahEarned': 'نقاط البركة المكتسبة',
    'myaction.verse': 'تأمل قرآني',
    'myaction.reflection': 'تأملك ونيتك',
    'myaction.reflectionPlaceholder': 'ماذا تعلمت؟ ما هي نيتك؟',
    'myaction.finishReflection': 'إنهاء وإغلاق',
    'myaction.streak': '!أيام متتالية',
    
    // About Page
    'about.title': 'قصتنا: من القلب إلى العمل',
    'about.mission': 'عندما احتاج الدعاء إلى طريق للعمل',
    'about.missionDesc': 'هذا ليس مجرد تطبيق آخر. إنه الجسر الذي تمنينا وجوده.',
    
    // Support Page
    'support.title': 'نحن هنا للمساعدة',
    'support.subtitle': 'ملاحظاتك تشكل مجتمعنا',
    'support.name': 'الاسم',
    'support.namePlaceholder': 'اسمك',
    'support.email': 'البريد الإلكتروني',
    'support.emailPlaceholder': 'your@email.com',
    'support.message': 'الرسالة',
    'support.messagePlaceholder': 'شارك أفكارك، أبلغ عن المشاكل، أو اقترح ميزات...',
    'support.submit': 'إرسال الرسالة',
    'support.success': 'شكراً لك! تم استلام رسالتك.',
    
    // Settings
    'settings.language': 'اللغة',
    'settings.theme': 'السمة',
    'settings.light': 'فاتح',
    'settings.dark': 'داكن',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('boldkhidma_language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('boldkhidma_language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
