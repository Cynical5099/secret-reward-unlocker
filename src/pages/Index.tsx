import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/StepCard";
import giftCardImage from "@/assets/gift-card-hero.jpg";

const Index = () => {
  const [qualified, setQualified] = useState(false);

  const handleStartNow = () => {
    window.open("https://offerlnks.com/aff_c?offer_id=324&aff_id=21664", "_blank");
  };

  if (!qualified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-card rounded-2xl shadow-luxury p-8 md:p-10 text-center border border-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">💎</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Quick Question
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Are you ready to complete a few simple deals to claim your $100 Victoria's Secret Gift Card?
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={() => setQualified(true)}
              className="w-full py-6 text-lg bg-primary hover:bg-primary/90"
            >
              Yes, I'm Ready to Get Started
            </Button>
            <button 
              onClick={() => window.close()}
              className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              No, maybe later
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-6">
            Only serious participants qualify for this exclusive offer
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              You're One Step Away From Your $100 Gift Card
            </h1>
            <p className="text-lg md:text-2xl text-primary-foreground/90 mb-10 md:mb-14 font-medium">
              Thousands have already claimed theirs — now it's your turn
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
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Complete These Steps to Claim Your Reward
        </h2>
        <p className="text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">
          Each deal you complete gets you closer to your $100 Victoria's Secret shopping spree
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <StepCard 
            number="1"
            title="Click 'Claim My Gift Card'"
            description="Start the quick verification process."
          />
          
          <StepCard 
            number="2"
            title="Complete 3 to 5 Partner Deals"
            description="Each deal takes just minutes. The more you complete, the faster you'll receive your gift card. Skipping deals will disqualify you."
            highlight
          />
          
          <StepCard 
            number="3"
            title="Get Your $100 Victoria's Secret Gift Card"
            description="Use it on lingerie, beauty, accessories — anything you want from Victoria's Secret."
          />
        </div>

        {/* Urgency Section */}
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-accent/10 border border-accent/30 rounded-xl text-center">
          <p className="text-foreground font-semibold text-lg mb-2">
            ⚡ Complete all deals today for fastest processing
          </p>
          <p className="text-muted-foreground text-sm">
            Users who finish all steps in one session receive their gift cards first
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 md:mt-16">
          <Button 
            variant="hero"
            size="xl"
            onClick={handleStartNow}
            className="text-xl md:text-2xl px-10 md:px-14 py-5 md:py-7 mb-4 min-h-[44px] animate-glow bg-primary hover:bg-primary/90"
          >
            Claim My Gift Card
          </Button>
          <p className="text-sm text-muted-foreground max-w-md mx-auto px-4">
            Join thousands who've already treated themselves with Victoria's Secret
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Complete all required deals to qualify for your reward.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
