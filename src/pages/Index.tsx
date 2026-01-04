import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/StepCard";
import giftCardImage from "@/assets/gift-card-hero.jpg";

const Index = () => {
  const handleStartNow = () => {
    window.open("https://offerlnks.com/aff_c?offer_id=324&aff_id=21664", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-card/20 backdrop-blur-sm text-primary-foreground px-5 py-2 rounded-full text-sm md:text-base font-medium mb-6 border border-primary-foreground/20">
              Limited Time Offer
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Claim Your $100 Victoria's Secret Gift Card
            </h1>
            <p className="text-lg md:text-2xl text-primary-foreground/90 mb-10 md:mb-14 font-medium">
              Follow the simple steps below to get your reward
            </p>
            
            <div className="relative max-w-xs md:max-w-md mx-auto mb-6 md:mb-8">
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-2xl blur-md animate-glow"></div>
              <div className="relative animate-float">
                <img 
                  src={giftCardImage} 
                  alt="VS $100 Victoria's Secret Gift Card" 
                  className="w-full h-auto rounded-xl shadow-luxury relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-14">
          How to Get Your Gift Card
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <StepCard 
            number="1"
            title="Click 'Start Now'"
            description="Tap the button below to begin your journey."
          />
          
          <StepCard 
            number="2"
            title="Complete 3 to 5 Deals"
            description="This is required to qualify — don't skip this step or you won't receive your reward!"
          />
          
          <StepCard 
            number="3"
            title="Enjoy Your Reward"
            description="Spend freely on anything you love from Victoria's Secret."
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 md:mt-16">
          <Button 
            variant="hero"
            size="xl"
            onClick={handleStartNow}
            className="text-xl md:text-2xl px-10 md:px-14 py-5 md:py-7 mb-4 min-h-[44px] animate-glow bg-primary hover:bg-primary/90"
          >
            Start Now
          </Button>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
            Click above to claim your $100 Victoria's Secret Gift Card
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Complete all steps to qualify for your reward.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
