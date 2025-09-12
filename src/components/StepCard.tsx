import { ReactNode } from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-luxury transition-smooth border border-border">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
            {title}
            {icon && <span className="text-xl">{icon}</span>}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};