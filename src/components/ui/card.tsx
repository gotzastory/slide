import * as React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

type CaseWallModule = {
  id: number;
  category: string;
  title: string;
  imageRefined: string;
  icon: LucideIcon;
  accent: string;
};

type CaseWallCardProps = {
  module: CaseWallModule;
  index: number;
  onClick: () => void;
};

const CaseWallCard = ({ module, index, onClick }: CaseWallCardProps) => {
  const Icon = module.icon;
  const tilt = [-3, 1, 3, -2, 2][index] ?? 0;

  return (
    <button
      type="button"
      className={`group relative min-w-0 cursor-pointer border-0 bg-transparent p-0 text-left text-[#2b1b14] transition-[transform,filter] duration-300 ease-in-out motion-reduce:transition-none [transform:rotate(var(--case-tilt))] before:pointer-events-none before:absolute before:left-1/2 before:top-[-14px] before:z-[2] before:h-[38px] before:w-[31px] before:-translate-x-1/2 before:rotate-[-13deg] before:rounded-t-[16px] before:border-[3px] before:border-[var(--case-accent)] before:border-b-0 before:opacity-90 before:content-[''] hover:z-[3] hover:translate-y-[-11px] hover:rotate-0 hover:scale-[1.025] hover:saturate-[1.1] focus-visible:z-[3] focus-visible:translate-y-[-11px] focus-visible:rotate-0 focus-visible:scale-[1.025] focus-visible:outline-[3px] focus-visible:outline-[#ffd35b] focus-visible:outline-offset-8 ${
        index === 3
          ? "col-span-2 col-start-2 max-[900px]:col-span-1 max-[900px]:col-start-2 max-[640px]:col-start-1"
          : index === 4
            ? "col-span-2 col-start-4 max-[900px]:col-span-1 max-[900px]:col-start-auto max-[640px]:col-start-1"
            : "col-span-2 max-[900px]:col-span-1"
      }`}
      style={
        {
          "--case-accent": module.accent,
          "--case-tilt": `${tilt}deg`,
        } as React.CSSProperties
      }
      onClick={onClick}
      aria-label={`Open case study: ${module.title}`}
    >
      <span className="block overflow-hidden rounded-[15px_15px_7px_7px] border border-white/70 bg-[#fffaf3] p-[8px_8px_13px] shadow-[0_22px_38px_rgba(6,20,18,.32),0_3px_0_rgba(255,255,255,.48)_inset]">
        <span className="flex h-7 items-center gap-2 px-1 pb-1.5 font-mono text-[8px] leading-none text-[#8d8175]">
          <span className="inline-flex shrink-0 gap-1">
            <i className="size-1.5 rounded-full bg-[#ff6258]" />
            <i className="size-1.5 rounded-full bg-[#ffc02f]" />
            <i className="size-1.5 rounded-full bg-[#2bc840]" />
          </span>
          <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            promptcraft / case-study / 0{module.id}
          </span>
          <span className="inline-grid size-[21px] shrink-0 place-items-center rounded-full border border-[#d8c8b8] text-[var(--case-accent)]">
            <Icon size={14} />
          </span>
        </span>
        <span className="block aspect-[1.52] overflow-hidden bg-[#e8dbc9]">
          <img
            className="size-full object-cover saturate-[.9] contrast-[1.02] transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.055] group-focus-visible:scale-[1.055]"
            src={module.imageRefined}
            width={1520}
            height={1000}
            alt=""
            loading="lazy"
          />
        </span>
        <span className="flex items-end justify-between gap-3 px-[5px] pb-px pt-[11px]">
          <strong className="line-clamp-2 max-w-[68%] font-['Noto_Serif_Thai',Georgia,serif] text-sm leading-[1.2]">
            {module.title.split("(")[0].trim()}
          </strong>
          <span className="inline-flex items-center gap-[3px] text-right font-mono text-[8px] leading-[1.2] text-[#816b59]">
            {module.category} <ArrowUpRight size={13} />
          </span>
        </span>
      </span>
    </button>
  );
};

type CaseStudyMetaProps = {
  category: string;
};

const CaseStudyMeta = ({ category }: CaseStudyMetaProps) => (
  <div
    className="grid grid-cols-2 gap-x-9 gap-y-[22px]"
    aria-label="Case study metadata"
  >
    <div>
      <span className="mb-1.5 block text-xs text-[#9a8777]">Category</span>
      <strong className="block overflow-hidden text-sm font-medium text-[#2b1b14] text-ellipsis whitespace-nowrap">
        {category}
      </strong>
    </div>
    <div>
      <span className="mb-1.5 block text-xs text-[#9a8777]">Method</span>
      <strong className="block overflow-hidden text-sm font-medium text-[#2b1b14] text-ellipsis whitespace-nowrap">
        Iterative prompting
      </strong>
    </div>
    <div>
      <span className="mb-1.5 block text-xs text-[#9a8777]">Outputs</span>
      <strong className="block overflow-hidden text-sm font-medium text-[#2b1b14] text-ellipsis whitespace-nowrap">
        Initial / Refined
      </strong>
    </div>
    <div>
      <span className="mb-1.5 block text-xs text-[#9a8777]">Source</span>
      <strong className="block overflow-hidden text-sm font-medium text-[#2b1b14] text-ellipsis whitespace-nowrap">
        PromptCraft
      </strong>
    </div>
  </div>
);

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CaseWallCard,
  CaseStudyMeta,
};
