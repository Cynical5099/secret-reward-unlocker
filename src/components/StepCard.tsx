interface StepCardProps {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const StepCard = ({ number, title, description, highlight }: StepCardProps) => {
  return (
    <div className={`rounded-xl p-5 md:p-7 shadow-card hover:shadow-luxury transition-all duration-300 border group hover:-translate-y-1 ${
      highlight 
        ? 'bg-accent/5 border-accent/40' 
        : 'bg-card border-border/50'
    }`}>
      <div className="flex items-start gap-4 md:gap-5">
        <div className={`flex-shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-luxury ${
          highlight 
            ? 'bg-accent text-accent-foreground' 
            : 'bg-gradient-primary text-primary-foreground'
        }`}>
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
