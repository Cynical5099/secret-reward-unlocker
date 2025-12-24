import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/StepCard";
import { Snowfall } from "@/components/Snowfall";
import giftCardImage from "@/assets/gift-card-hero.jpg";

const Index = () => {
  const handleStartNow = () => {
    window.open("https://offerlnks.com/aff_c?offer_id=324&aff_id=21664", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      <Snowfall />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        
        {/* Christmas decorations */}
        <div className="absolute top-4 left-4 text-2xl md:text-4xl animate-twinkle">🎄</div>
        <div className="absolute top-4 right-4 text-2xl md:text-4xl animate-twinkle" style={{ animationDelay: '0.5s' }}>🎄</div>
        <div className="absolute top-8 left-1/4 text-xl md:text-2xl animate-twinkle" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute top-8 right-1/4 text-xl md:text-2xl animate-twinkle" style={{ animationDelay: '1.5s' }}>⭐</div>
        
        <div className="relative container mx-auto px-4 py-8 md:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Christmas banner */}
            <div className="inline-block bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm md:text-base font-semibold mb-4 shadow-lg">
              🎅 Holiday Special Offer 🎅
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight drop-shadow-lg">
              🎁 Claim Your $100 Victoria's Secret Gift Card 🎁
            </h1>
            <p className="text-lg md:text-2xl text-primary-foreground/95 mb-8 md:mb-12 font-medium drop-shadow-md">
              🎄 Follow the steps below to unwrap your holiday reward! 🎄
            </p>
            <div className="relative max-w-xs md:max-w-md mx-auto mb-6 md:mb-8">
              {/* Festive frame around card */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-75 blur-sm animate-pulse-glow"></div>
              <div className="relative">
                <img 
                  src={giftCardImage} 
                  alt="VS $100 Victoria's Secret Gift Card" 
                  className="w-full h-auto rounded-xl shadow-christmas relative z-10"
                />
                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 text-2xl md:text-3xl z-20">🎀</div>
                <div className="absolute -top-3 -right-3 text-2xl md:text-3xl z-20">🎀</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 py-8 md:py-16 relative">
        {/* Section decoration */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🎄</span>
          <span className="text-xl">❄️</span>
          <span className="text-2xl">🎁</span>
          <span className="text-xl">❄️</span>
          <span className="text-2xl">🎄</span>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          Simple Steps to Your Holiday Reward
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <StepCard 
            number="1"
            title="Click 'Unwrap Now'"
            description="Tap the button below to begin your holiday journey."
            icon="🎅"
          />
          
          <StepCard 
            number="2"
            title="Complete 3 to 5 Deals"
            description="This is required to qualify — don't skip this step or you won't receive your reward!"
            icon="🎁"
          />
          
          <StepCard 
            number="3"
            title="Enjoy Your Holiday Gift"
            description="Spend freely on anything you love from Victoria's Secret."
            icon="✨"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-16">
          <Button 
            variant="hero"
            size="xl"
            onClick={handleStartNow}
            className="text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 mb-4 min-h-[44px] animate-pulse-glow bg-primary hover:bg-primary/90"
          >
            🎁 Unwrap Now 🎁
          </Button>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
            🎄 Click above to claim your $100 Victoria's Secret Holiday Gift Card 🎄
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary/10 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span>🎄</span>
            <span>❄️</span>
            <span>🎁</span>
            <span>❄️</span>
            <span>🎄</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Complete all steps to qualify for your holiday reward.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;