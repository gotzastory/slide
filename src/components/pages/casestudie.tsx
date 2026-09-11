import { useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Image,
  Network,
  Paperclip,
  Presentation,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { CaseStudyMeta, CaseWallCard } from "../ui/card";
import {
  CaseComparison,
  type ComparisonCopyState,
  type ComparisonTab,
} from "../ui/case-comparison";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import moduleData from "../../data/modules.json";

type Category =
  | "Graphics"
  | "Math Modeling"
  | "Architecture"
  | "Documentation"
  | "Presentation";
type CopyState = ComparisonCopyState;

type Module = {
  id: number;
  category: Category;
  title: string;
  short: string;
  initial: string;
  refined: string;
  reflection: string;
  icon: LucideIcon;
  accent: string;
  imageInitial: string;
  imageRefined: string;
  syntax: string;
  syntaxRefined?: string;
  flow: string[];
};

type IconName = "image" | "network" | "workflow" | "file-text" | "presentation";
type ModuleData = Omit<Module, "icon"> & { icon: IconName };

const iconByName: Record<IconName, LucideIcon> = {
  image: Image,
  network: Network,
  workflow: Workflow,
  "file-text": FileText,
  presentation: Presentation,
};

const modules: Module[] = (moduleData as ModuleData[]).map((module) => ({
  ...module,
  icon: iconByName[module.icon],
}));

export function CaseStudies() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [activeTab, setActiveTab] = useState<ComparisonTab>("refined");
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const openComparison = (module: Module) => {
    setSelectedModule(module);
    setActiveTab("refined");
    setCopyState("idle");
  };

  const copySyntax = async () => {
    if (!selectedModule) return;
    try {
      const syntax =
        activeTab === "refined"
          ? (selectedModule.syntaxRefined ?? selectedModule.syntax)
          : selectedModule.syntax;
      await navigator.clipboard.writeText(syntax);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("error");
    }
  };

  const copyStatus =
    copyState === "copied"
      ? "Prompt syntax copied."
      : copyState === "error"
        ? "Copy failed. Select the text manually."
        : "";

  return (
    <>
      <section
        id="modules"
        className="relative z-[3] isolate mt-32 overflow-hidden bg-[#25422c] bg-[url('/image/image.png')] bg-cover bg-[position:center_48%] text-[#fffaf3] max-[640px]:mt-[88px]"
        aria-labelledby="case-studies-title"
      >
        <div className="relative mx-auto w-[calc(100%-48px)] max-w-[1180px] pb-[70px] pt-[78px] max-[640px]:w-[calc(100%-30px)] max-[640px]:pb-16 max-[640px]:pt-[72px]">
          <div className="flex justify-center text-center">
            <div>
              <div
                className="mb-[17px] inline-flex -rotate-[7deg] items-center gap-2 rounded-[7px] border border-white/80 bg-[#e5f2fa] py-[7px] pl-2 pr-[13px] font-sans text-[13px] font-semibold leading-none text-[#2b1b14] shadow-[0_8px_18px_rgba(6,20,18,.2)]"
                aria-hidden="true"
              >
                <span className="inline-grid size-[25px] place-items-center rounded-full border border-white/90 bg-[#039cfb] text-white shadow-[-2px_3px_2px_rgba(0,0,0,.2)]">
                  <Paperclip size={15} />
                </span>
                <span>Case Studies</span>
              </div>
              <h2
                id="case-studies-title"
                className="m-0 font-['Noto_Serif_Thai',Georgia,serif] text-[clamp(52px,7vw,92px)] font-semibold leading-[.86] tracking-[-.075em] max-[640px]:text-[clamp(53px,17vw,78px)]"
              >
                Case Studies that
                <br />
                <span className="font-normal text-[#ffd35b]">
                  tell stories.
                </span>
              </h2>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-6 items-start gap-x-4 gap-y-8 [perspective:1400px] max-[900px]:grid-cols-2 max-[640px]:mt-9 max-[640px]:grid-cols-1 max-[640px]:gap-y-[37px] max-[640px]:px-[13px]">
            {modules.map((module, index) => (
              <CaseWallCard
                key={module.id}
                module={module}
                index={index}
                onClick={() => openComparison(module)}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={Boolean(selectedModule)}
        onOpenChange={(open) => {
          if (!open) setSelectedModule(null);
        }}
      >
        {selectedModule && (
          <DialogContent className="max-w-[700px] rounded-[24px] border-[rgba(43,27,20,.16)] bg-white p-0 text-[#2b1b14] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <DialogHeader className="gap-5 px-6 pb-[26px] pt-0 max-[640px]:px-[18px] max-[640px]:pb-[19px]">
              <div className="-mx-6 flex min-h-[53px] items-center gap-3 bg-white px-6 font-sans text-[9px] leading-none text-[#b3aaa2] after:ml-auto after:text-[16px] after:content-['↻'] max-[640px]:-mx-[18px] max-[640px]:px-[18px]">
                <span className="inline-flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-transparent p-0 transition-transform duration-200 motion-reduce:transition-none hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#2475c5] focus-visible:outline-offset-2"
                    aria-label="Close case study"
                    onClick={() => setSelectedModule(null)}
                  >
                    <span className="size-2 rounded-full bg-[#ff6258]" aria-hidden="true" />
                  </button>
                  <i className="size-2 rounded-full bg-[#ffc02f]" />
                  <i className="size-2 rounded-full bg-[#2bc840]" />
                </span>
                <span className="max-w-[430px] flex-1 rounded-md bg-[#f1f1f1] px-3 py-2 text-[11px] text-[#99918a]">
                  Portfolio / Case Study
                </span>
                <span className="text-[18px] text-[#1595e7] [text-shadow:2px_0_#f5c84b]">
                  ✦
                </span>
              </div>
              <div className="aspect-[1.62] overflow-hidden rounded-xl bg-[#eee] shadow-[0_10px_22px_rgba(43,27,20,.15)] max-[640px]:aspect-[1.3]">
                <img
                  className="size-full object-cover"
                  src={
                    activeTab === "initial"
                      ? selectedModule.imageInitial
                      : selectedModule.imageRefined
                  }
                  width={1600}
                  height={1000}
                  alt={`${selectedModule.title} — ${activeTab} output`}
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <DialogTitle
                    id="comparison-title"
                    className="max-w-[520px] text-[30px] text-[#2b1b14] max-[640px]:text-2xl"
                  >
                    {selectedModule.title}
                  </DialogTitle>
                  <DialogDescription className="mt-[11px] max-w-[590px] text-[13px] leading-[1.6] text-[#6e5a4b]">
                    {selectedModule.short}
                  </DialogDescription>
                </div>
                <a
                  className="mt-[5px] inline-flex min-h-11 shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold text-[#2475c5] no-underline hover:underline max-[640px]:mt-0 max-[640px]:text-[11px]"
                  href={selectedModule.imageRefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview Link <ArrowUpRight size={15} />
                </a>
              </div>
              <CaseStudyMeta category={selectedModule.category} />
            </DialogHeader>

            <CaseComparison
              module={selectedModule}
              activeTab={activeTab}
              copyState={copyState}
              copyStatus={copyStatus}
              onTabChange={setActiveTab}
              onCopySyntax={copySyntax}
              onClose={() => setSelectedModule(null)}
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
