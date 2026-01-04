interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="bg-card rounded-xl p-5 md:p-7 shadow-card hover:shadow-luxury transition-all duration-300 border border-border/50 group hover:-translate-y-1">
      <div className="flex items-start gap-4 md:gap-5">
        <div className="flex-shrink-0 w-11 h-11 md:w-14 md:h-14 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-luxury">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg md:text-xl text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
