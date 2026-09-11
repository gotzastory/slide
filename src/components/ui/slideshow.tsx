import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Expand,
  Presentation,
} from "lucide-react";


const slideCount = 36;
const slides = Array.from({ length: slideCount }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return { number, src: `/slide/rendered/slide-${number}.jpg` };
});

const pdfSource = "/slide/2610717302011%20-%20GE931%20Slide.pdf";

export function Slideshow() {
  const [activeSlide, setActiveSlide] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft")
        setActiveSlide((current) => Math.max(1, current - 1));
      if (event.key === "ArrowRight")
        setActiveSlide((current) => Math.min(slideCount, current + 1));
      if (event.key === "Home") setActiveSlide(1);
      if (event.key === "End") setActiveSlide(slideCount);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await stageRef.current?.requestFullscreen();
    } catch {
      // Fullscreen can be unavailable in embedded previews.
    }
  };

  const goToSlide = (slide: number) => {
    setActiveSlide(Math.min(slideCount, Math.max(1, slide)));
  };



  return (
    <section
      id="about"
      className="paper-decor-section slide-paper-decor relative mt-[10px] overflow-hidden px-0 py-[76px] text-[#fffaf3] max-[640px]:mt-[84px] max-[640px]:py-[58px]"
      aria-labelledby="slide-deck-title"
    >
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1180px] max-[640px]:w-[calc(100%-30px)]">
        <div className="flex items-end justify-between gap-8 max-[700px]:items-start max-[700px]:flex-col">
          <div>
            <h2
              id="slide-deck-title"
              className="mt-7 max-w-[760px] text-black text-[clamp(42px,7vw,86px)] font-semibold leading-[.9] tracking-[-.075em]"
            >
              Slide <span className="text-yellow-400">Presentation</span>
            </h2>
          </div>
          <div className="max-w-[240px] pb-1 text-right font-mono text-[10px] uppercase leading-[1.5] tracking-[0.08em] text-white/55 max-[700px]:text-left">
            GE931 / 36 slides
            <br />
            Use ← → to navigate
          </div>
        </div>

        <div
          className="relative mx-auto mt-10 w-full max-w-[1040px] [transform:rotate(var(--slide-tilt))] transition-[transform,filter] duration-300 motion-reduce:transition-none before:pointer-events-none before:absolute before:left-1/2 before:top-[-14px] before:z-[2] before:h-[38px] before:w-[31px] before:-translate-x-1/2 before:rotate-[-13deg] before:rounded-t-[16px] before:border-[3px] before:border-[#d69a5d] before:border-b-0 before:opacity-90 before:content-[''] hover:rotate-0 hover:saturate-[1.03] max-[640px]:mt-8"
          style={{ "--slide-tilt": "-1deg" } as CSSProperties}
        >
          <div className="overflow-hidden rounded-[15px_15px_7px_7px] border border-white/70 bg-[#fffaf3] p-[8px_8px_13px] text-[#2b1b14] shadow-[0_22px_38px_rgba(6,20,18,.32),0_3px_0_rgba(255,255,255,.48)_inset]">
            <div className="flex h-7 items-center gap-2 px-1 pb-1.5 font-mono text-[8px] leading-none text-[#8d8175]">
              <span className="inline-flex shrink-0 gap-1" aria-hidden="true">
                <i className="size-1.5 rounded-full bg-[#ff6258]" />
                <i className="size-1.5 rounded-full bg-[#ffc02f]" />
                <i className="size-1.5 rounded-full bg-[#2bc840]" />
              </span>
              <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                promptcraft / slide-deck / 01
              </span>
              <span className="inline-grid size-[21px] shrink-0 place-items-center rounded-full border border-[#d8c8b8] text-[#d69a5d]">
                <Presentation size={14} />
              </span>
            </div>

            <div
              ref={stageRef}
              className="group/stage relative aspect-[16/9] overflow-hidden rounded-[7px] bg-[#e8dbc9] outline-none fullscreen:rounded-none"
              tabIndex={0}
              aria-label={`Slide ${activeSlide} of ${slideCount}`}
            >
              <img
                key={activeSlide}
                src={slides[activeSlide - 1].src}
                width={1600}
                height={900}
                alt={`GE931 slide ${activeSlide} of ${slideCount}`}
                className="size-full object-contain transition-transform duration-500 motion-reduce:transition-none group-hover/stage:scale-[1.01] group-focus-within/stage:scale-[1.01]"
                draggable="false"
                fetchPriority={activeSlide === 1 ? "high" : "auto"}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-12 opacity-0 transition-opacity duration-200 motion-reduce:transition-none group-hover/stage:opacity-100 group-focus-within/stage:opacity-100 max-[640px]:opacity-100 max-[640px]:px-2 max-[640px]:pb-2">
                <span className="font-mono text-[10px] tracking-[0.08em] text-white/85">
                  {slides[activeSlide - 1].number} /{" "}
                  {String(slideCount).padStart(2, "0")}
                </span>
                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToSlide(activeSlide - 1)}
                    disabled={activeSlide === 1}
                    className="grid size-11 place-items-center rounded-full border border-white/40 bg-black/30 text-white transition motion-reduce:transition-none hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(activeSlide + 1)}
                    disabled={activeSlide === slideCount}
                    className="grid size-11 place-items-center rounded-full border border-white/40 bg-black/30 text-white transition motion-reduce:transition-none hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 px-[5px] pb-px pt-[11px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
              <strong className="font-['Noto_Serif_Thai',Georgia,serif] text-[clamp(17px,2.2vw,25px)] leading-[1.1]">
                การสร้างรูป ด้วย AI
              </strong>
              <span className="inline-flex items-center gap-[3px] text-right font-mono text-[9px] leading-[1.2] text-[#816b59]">
                GE931 / Slide deck <ArrowUpRight size={13} />
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 px-[5px] text-[#816b59]">
              <div
                className="h-1 flex-1 overflow-hidden rounded-full bg-[#eadfce]"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-[#d69a5d] transition-[width] duration-300"
                  style={{ width: `${(activeSlide / slideCount) * 100}%` }}
                />
              </div>
              <span
                className="min-w-[52px] text-right font-mono text-[9px] tracking-[0.08em]"
                aria-live="polite"
              >
                {String(activeSlide).padStart(2, "0")} /{" "}
                {String(slideCount).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d8c8b8] transition motion-reduce:transition-none hover:border-[#9a4f2d] hover:text-[#9a4f2d] focus-visible:outline-2 focus-visible:outline-[#9a4f2d] focus-visible:outline-offset-2"
                aria-label="Toggle fullscreen"
              >
                <Expand size={15} />
              </button>
              <a
                href={pdfSource}
                download
                className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d8c8b8] transition motion-reduce:transition-none hover:border-[#9a4f2d] hover:text-[#9a4f2d] focus-visible:outline-2 focus-visible:outline-[#9a4f2d] focus-visible:outline-offset-2"
                aria-label="Download source PDF"
              >
                <Download size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
