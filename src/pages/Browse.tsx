import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { Header } from "@/components/Header";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface Action {
  id: string;
  title: string;
  country: string;
  causeType: string;
  steps: string[];
  impactMetrics: {
    people: number;
    duration: string;
  };
  goFundMeUrl?: string;
}

// Mock actions data - indicates expected Supabase structure
const mockActions: Action[] = [
  {
    id: "1",
    title: "Provide Clean Water Access",
    country: "Yemen",
    causeType: "Food/Water",
    steps: [
      "Research verified water charities in Yemen",
      "Donate $25 to fund a water filter",
      "Share the initiative on social media",
      "Track the impact via charity updates"
    ],
    impactMetrics: {
      people: 15,
      duration: "6 months"
    },
    goFundMeUrl: "https://gofundme.com/example-water-yemen"
  },
  {
    id: "2",
    title: "Sponsor an Orphan's Education",
    country: "Palestine",
    causeType: "Education",
    steps: [
      "Select verified education charity",
      "Commit to $30/month sponsorship",
      "Receive quarterly progress reports",
      "Write encouragement letter to student"
    ],
    impactMetrics: {
      people: 1,
      duration: "1 year"
    },
    goFundMeUrl: "https://gofundme.com/example-edu-palestine"
  },
  {
    id: "3",
    title: "Deliver Medical Supplies",
    country: "Syria",
    causeType: "Medical",
    steps: [
      "Contact local medical aid organization",
      "Donate $50 for emergency medical kit",
      "Volunteer to organize supply drive",
      "Follow up on delivery confirmation"
    ],
    impactMetrics: {
      people: 25,
      duration: "3 months"
    }
  },
  {
    id: "4",
    title: "Winter Clothing Distribution",
    country: "Afghanistan",
    causeType: "Clothes",
    steps: [
      "Partner with verified clothing charity",
      "Donate $40 for winter clothes package",
      "Help sort and package donations",
      "Share photos of distribution"
    ],
    impactMetrics: {
      people: 10,
      duration: "Winter season"
    }
  },
  {
    id: "5",
    title: "Support Orphan Care Center",
    country: "Somalia",
    causeType: "Orphans",
    steps: [
      "Research orphan care facilities",
      "Donate $60 for monthly care support",
      "Send care package with supplies",
      "Establish ongoing correspondence"
    ],
    impactMetrics: {
      people: 5,
      duration: "Ongoing"
    },
    goFundMeUrl: "https://gofundme.com/example-orphan-somalia"
  }
];

const Browse = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filters, setFilters] = useState({
    country: "All",
    causeType: "All"
  });

  const countries = [t('browse.allCountries'), "Yemen", "Palestine", "Syria", "Afghanistan", "Somalia"];
  const causeTypes = [
    t('browse.allCauses'),
    t('browse.medical'),
    t('browse.foodWater'),
    t('browse.education'),
    t('browse.clothes'),
    t('browse.orphans')
  ];

  const causeTypeMap: Record<string, string> = {
    [t('browse.medical')]: 'Medical',
    [t('browse.foodWater')]: 'Food/Water',
    [t('browse.education')]: 'Education',
    [t('browse.clothes')]: 'Clothes',
    [t('browse.orphans')]: 'Orphans'
  };

  // Filter actions based on selected filters
  const filteredActions = mockActions.filter(action => {
    const matchesCountry = filters.country === t('browse.allCountries') || filters.country === "All" || action.country === filters.country;
    const matchesCauseRaw = filters.causeType === t('browse.allCauses') || filters.causeType === "All";
    const matchesCause = matchesCauseRaw || action.causeType === filters.causeType || action.causeType === causeTypeMap[filters.causeType];
    return matchesCountry && matchesCause;
  });

  const currentAction = filteredActions[currentIndex] || mockActions[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredActions.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
  };

  const handleAddToMyAction = () => {
    // Store active action in localStorage
    localStorage.setItem('boldkhidma_active_action', JSON.stringify(currentAction));
    toast.success(t('browse.addToMyAction') + "!");
    
    // Trigger event to update barakah display
    window.dispatchEvent(new Event('barakah-updated'));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pattern-dots pb-24 pt-14">
        {/* Header */}
        <header className="sticky top-14 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-foreground mb-6">{t('browse.title')}</h1>
            
            {/* Filters */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t('browse.filterCountry')}</p>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <Badge
                    key={country}
                    variant={filters.country === country ? "default" : "outline"}
                    className="cursor-pointer transition-all"
                    onClick={() => {
                      setFilters({ ...filters, country });
                      setCurrentIndex(0);
                    }}
                  >
                    {country}
                  </Badge>
                ))}
              </div>
            </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">{t('browse.filterCause')}</p>
              <div className="flex flex-wrap gap-2">
                {causeTypes.map((type) => (
                  <Badge
                    key={type}
                    variant={filters.causeType === type ? "default" : "outline"}
                    className="cursor-pointer transition-all"
                    onClick={() => {
                      setFilters({ ...filters, causeType: type });
                      setCurrentIndex(0);
                    }}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Single Action Card */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <Card className="p-8 shadow-elevated space-y-6 animate-scale-in">
          {/* Title & Badges */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-2xl font-bold text-foreground">{currentAction.title}</h2>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">{currentAction.country}</Badge>
              <Badge variant="outline">{currentAction.causeType}</Badge>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Action Steps:</h3>
            <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
              {currentAction.steps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>

            {/* Impact Metrics */}
            <div className="bg-cream/50 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-foreground text-sm">{t('browse.impact')}:</h3>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">People Helped: </span>
                <span className="font-bold text-foreground">{currentAction.impactMetrics.people}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Duration: </span>
                <span className="font-bold text-foreground">{currentAction.impactMetrics.duration}</span>
              </div>
            </div>
          </div>

            {currentAction.goFundMeUrl && (
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(currentAction.goFundMeUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t('browse.donate')}
                </Button>
              </div>
            )}

            {/* Add to MyAction */}
            <Button
              onClick={handleAddToMyAction}
              className="w-full bg-gold hover:bg-gold/90"
              size="lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              {t('browse.addToMyAction')}
            </Button>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={filteredActions.length <= 1}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {filteredActions.length}
            </span>
            <Button
              variant="ghost"
              onClick={handleNext}
              disabled={filteredActions.length <= 1}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
          </Card>
        </main>

        <Navigation />
      </div>
    </>
  );
};

export default Browse;
