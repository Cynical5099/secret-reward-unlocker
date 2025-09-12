import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/StepCard";
import giftCardImage from "@/assets/gift-card-hero.jpg";

const Index = () => {
  const handleStartNow = () => {
    window.open("https://offerlnks.com/aff_c?offer_id=324&aff_id=21664", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ✨ Claim Your $100 Victoria's Secret Gift Card ✨
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
              Follow the steps below to unlock your reward today!
            </p>
            <div className="relative max-w-md mx-auto mb-8">
              <img 
                src={giftCardImage} 
                alt="Victoria's Secret Gift Card" 
                className="w-full h-auto rounded-xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Simple Steps to Your Reward
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <StepCard 
            number="1"
            title="Click 'Start Now'"
            description="Tap the button below to begin your journey."
            icon="👆"
          />
          
          <StepCard 
            number="2"
            title="Complete 3–5 Deals"
            description="This is required to qualify — don't skip this step or you won't receive your reward!"
            icon="✅"
          />
          
          <StepCard 
            number="3"
            title="Enjoy Your Reward"
            description="Spend freely on anything you love from Victoria's Secret."
            icon="🎁"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            variant="hero"
            size="xl"
            onClick={handleStartNow}
            className="text-2xl px-12 py-6 mb-4"
          >
            Start Now
          </Button>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            👉 Click the button above to claim your $100 Victoria's Secret Gift Card 👈
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Complete all steps to qualify for your reward. Terms and conditions apply.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
