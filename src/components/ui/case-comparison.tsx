import { ArrowUpRight, Braces, Check, Copy, Sparkles } from "lucide-react";
import { Button } from "./button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export type ComparisonTab = "initial" | "refined";
export type ComparisonCopyState = "idle" | "copied" | "error";

export type CaseComparisonModule = {
  title: string;
  initial: string;
  refined: string;
  reflection: string;
  syntax: string;
  syntaxRefined?: string;
};

type CaseComparisonProps = {
  module: CaseComparisonModule;
  activeTab: ComparisonTab;
  copyState: ComparisonCopyState;
  copyStatus: string;
  onTabChange: (value: ComparisonTab) => void;
  onCopySyntax: () => void;
  onClose: () => void;
};

export function CaseComparison({
  module,
  activeTab,
  copyState,
  copyStatus,
  onTabChange,
  onCopySyntax,
  onClose,
}: CaseComparisonProps) {
  return (
    <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(310px,.92fr)] gap-5 px-6 pb-[27px] pt-[26px] max-[640px]:grid-cols-1 max-[640px]:p-[18px]">
      <div className="min-w-0">
        <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as ComparisonTab)}>
          <TabsList
            className="border-[rgba(73,45,30,.12)] bg-[#f5eadc]"
            aria-label="Compare artifact outputs"
          >
            <TabsTrigger
              className="text-[#6e5a4b] data-[state=active]:bg-[#e6caa7] data-[state=active]:text-[#2b1b14]"
              value="initial"
            >
              ผลลัพธ์แรก
            </TabsTrigger>
            <TabsTrigger
              className="text-[#6e5a4b] data-[state=active]:bg-[#e6caa7] data-[state=active]:text-[#2b1b14]"
              value="refined"
            >
              ผลลัพธ์ใหม่
            </TabsTrigger>
          </TabsList>

          <TabsContent className="mt-3" value="initial">
            <p className="mt-[13px] text-xs leading-[1.7] text-[#6e5a4b]">
              {module.initial}
            </p>
            <PromptBlock
              syntax={module.syntax}
              copyState={copyState}
              onCopy={onCopySyntax}
            />
          </TabsContent>

          <TabsContent className="mt-3" value="refined">
            <p className="mt-[13px] text-xs leading-[1.7] text-[#6e5a4b]">
              {module.refined}
            </p>
            <PromptBlock
              syntax={module.syntaxRefined ?? module.syntax}
              copyState={copyState}
              onCopy={onCopySyntax}
            />
          </TabsContent>
        </Tabs>
      </div>

      <aside className="flex flex-col gap-[15px]">
        <span className="sr-only" role="status" aria-live="polite">
          {copyStatus}
        </span>
        {copyState === "error" && (
          <span className="mt-2 block text-[10px] text-red-300">
            Copy failed — select the text manually.
          </span>
        )}
        <div className="flex-1 rounded-[10px] border border-[rgba(123,63,34,.32)] bg-[linear-gradient(145deg,rgba(214,154,93,.12),rgba(111,53,29,.05))] p-4">
          <div className="mb-[11px] flex items-center gap-[7px] text-[9px] text-[#9a4f2d]">
            <Sparkles size={14} /> REFLECTION INSIGHT
          </div>
          <p className="m-0 text-xs leading-[1.75] text-[#6e5a4b]">
            {module.reflection}
          </p>
        </div>
        <Button
          className="mt-auto min-h-11 w-full bg-[#9a4f2d] text-white hover:bg-[#7b3f22]"
          type="button"
          onClick={onClose}
        >
          Back to all projects <ArrowUpRight size={16} />
        </Button>
      </aside>
    </div>
  );
}

type PromptBlockProps = {
  syntax: string;
  copyState: ComparisonCopyState;
  onCopy: () => void;
};

function PromptBlock({ syntax, copyState, onCopy }: PromptBlockProps) {
  return (
    <div className="mt-[13px] rounded-[10px] border border-[rgba(73,45,30,.15)] bg-[#f7eee4] p-[13px]">
      <div className="mb-[9px] flex items-center gap-[7px] text-[9px] text-[#9a4f2d]">
        <Braces size={14} /> PROMPT SYNTAX
      </div>
      <div className="relative rounded-[7px] border border-[rgba(148,163,184,.15)] bg-[#2b1b14] px-[13px] py-[13px] pr-14">
        <code className="block whitespace-pre-wrap break-words font-mono text-[11px] leading-[1.65] text-[#f1d1a7]">
          {syntax}
        </code>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1 grid size-11 place-items-center rounded-[5px] border-0 bg-[rgba(148,163,184,.12)] text-[#cbb7a4] hover:text-[#d69a5d]"
          type="button"
          onClick={onCopy}
          aria-label={
            copyState === "copied"
              ? "Prompt syntax copied"
              : "Copy prompt syntax"
          }
        >
          {copyState === "copied" ? <Check size={15} /> : <Copy size={15} />}
        </Button>
      </div>
    </div>
  );
}
