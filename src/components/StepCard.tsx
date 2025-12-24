import { ReactNode } from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-card hover:shadow-christmas transition-smooth border-2 border-secondary/30 relative overflow-hidden group">
      {/* Christmas ribbon decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-2 right-[-20px] w-[80px] h-4 bg-gradient-to-r from-primary to-primary/80 rotate-45 shadow-md" />
      </div>
      
      <div className="flex items-start gap-3 md:gap-4">
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base md:text-lg shadow-luxury group-hover:animate-bounce-gentle">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-base md:text-lg text-foreground mb-2 flex items-center gap-2">
            {title}
            {icon && <span className="text-lg md:text-xl animate-twinkle">{icon}</span>}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};