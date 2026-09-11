import { ChevronRight } from "lucide-react";

const shell =
  "mx-auto w-[calc(100%-48px)] max-w-[1180px] max-[640px]:w-[calc(100%-30px)]";
const sectionHeading =
  "m-0 text-[clamp(38px,5vw,61px)] leading-[0.99] tracking-[-0.07em] text-[var(--text)]";

export function About() {
  return (
    <section
      id="method"
      className="paper-decor-section about-paper-decor pt-[125px] max-[640px]:pt-[84px]"
      aria-labelledby="method-title"
    >
      <div
        className={`${shell} mt-[31px] grid grid-cols-2 gap-20 max-[640px]:grid-cols-1 max-[640px]:gap-[35px]`}
      >
        <div>
          <h2 id="method-title" className={sectionHeading}>
            The prompt is
            <br />
            <span className="font-normal text-[var(--cyan)]">
              the architecture.
            </span>
          </h2>
        </div>
        <div className="max-w-[470px] self-end pb-1">
          <p className="m-0 text-sm leading-[1.75] text-[var(--muted)]">
            PromptCraft traces the move from “make something” to “make something
            with a model, an audience, and a measurable outcome.” Each module is
            a real before/after loop.
          </p>
          <div className="mt-[29px] flex items-center gap-[11px] font-mono text-[11px] text-[var(--text)]">
            <span className="inline-flex items-center gap-[6px]">
              <i className="not-italic text-[var(--cyan)]">01</i> Context
            </span>
            <ChevronRight size={15} />
            <span className="inline-flex items-center gap-[6px]">
              <i className="not-italic text-[var(--cyan)]">02</i> Constraint
            </span>
            <ChevronRight size={15} />
            <span className="inline-flex items-center gap-[6px]">
              <i className="not-italic text-[var(--cyan)]">03</i> Craft
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
