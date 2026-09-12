import { createElement, useEffect, type CSSProperties } from "react";
import { assetUrl } from "../../lib/utils";

const mascotModelSrc = assetUrl("model/PromptCraft_Web.glb");

type ModelViewerProps = {
  className?: string;
  ref?: (element: HTMLElement | null) => void;
  loading?: "auto" | "lazy" | "eager";
  "auto-rotate"?: boolean;
  "auto-rotate-delay"?: string;
  "rotation-per-second"?: string;
  "camera-orbit"?: string;
  "field-of-view"?: string;
  "shadow-intensity"?: string;
  exposure?: string;
  "environment-image"?: string;
};

function ModelViewer(props: ModelViewerProps) {
  return createElement("model-viewer", props);
}

const bubbles = [
  { left: "5%", size: "clamp(64px, 7vw, 138px)", delay: "-2s", duration: "19s", drift: "42px" },
  { left: "22%", size: "clamp(42px, 4.6vw, 88px)", delay: "-11s", duration: "15s", drift: "-30px" },
  { left: "39%", size: "clamp(58px, 6vw, 116px)", delay: "-7s", duration: "21s", drift: "52px" },
  { left: "61%", size: "clamp(38px, 4.2vw, 80px)", delay: "-15s", duration: "16s", drift: "-38px" },
  { left: "75%", size: "clamp(70px, 8vw, 156px)", delay: "-5s", duration: "23s", drift: "34px" },
  { left: "89%", size: "clamp(48px, 5vw, 96px)", delay: "-18s", duration: "18s", drift: "-46px" },
];

export function Hero() {
  useEffect(() => {
    void import("@google/model-viewer").catch((error: unknown) => {
      console.error("Failed to load the 3D hero viewer.", error);
    });
  }, []);

  return (
    <section
      className="relative z-[3] isolate block min-h-[max(720px,100svh)] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(73, 140, 239, 0.08), rgba(29, 89, 165, 0.16)), url("${assetUrl("image/afb29d8d-b16f-4f08-8790-48a820c5c599.png")}")`,
      }}
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_9%_13%,rgba(255,255,255,0.92)_0_3%,transparent_12%),radial-gradient(ellipse_at_90%_31%,rgba(255,255,255,0.75)_0_3%,transparent_13%),radial-gradient(ellipse_at_72%_8%,rgba(255,255,255,0.7)_0_2%,transparent_10%)] opacity-[0.38] blur-[10px]"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-label="Prompt iteration preview"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 opacity-[0.12] [background-image:linear-gradient(color-mix(in_srgb,var(--cyan)_18%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--cyan)_18%,transparent)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_68%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-[12%] z-0 animate-[sky-shimmer_24s_ease-in-out_infinite_alternate] motion-reduce:animate-none bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.46),transparent_24%),radial-gradient(circle_at_78%_30%,rgba(116,210,255,0.28),transparent_28%),linear-gradient(118deg,rgba(255,255,255,0.16),transparent_42%,rgba(30,102,214,0.2))] opacity-[0.72] mix-blend-screen will-change-[transform,opacity]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-[linear-gradient(180deg,transparent_52%,rgba(35,111,208,0.08)_100%)]"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[10] overflow-hidden">
            {bubbles.map((bubble, index) => (
              <span
                className="hero-bubble"
                key={index}
                style={
                  {
                    left: bubble.left,
                    width: bubble.size,
                    height: bubble.size,
                    "--bubble-delay": bubble.delay,
                    "--bubble-duration": bubble.duration,
                    "--bubble-drift": bubble.drift,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute left-[4%] top-[18%] z-[1] h-[70px] w-[260px] animate-[cloud-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none rounded-full bg-white/55 opacity-[0.22] blur-[17px] will-change-[transform,opacity] before:absolute before:bottom-[17px] before:left-[42px] before:h-[95px] before:w-[95px] before:rounded-full before:bg-white/55 before:content-[''] after:absolute after:bottom-[17px] after:right-[45px] after:h-[120px] after:w-[120px] after:rounded-full after:bg-white/55 after:content-['']"
          />
          <div
            aria-hidden="true"
            className="absolute right-[-3%] top-[30%] z-[1] h-[70px] w-[260px] scale-[0.72] animate-[cloud-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none rounded-full bg-white/55 opacity-[0.22] blur-[17px] [animation-delay:-7s] will-change-[transform,opacity] before:absolute before:bottom-[17px] before:left-[42px] before:h-[95px] before:w-[95px] before:rounded-full before:bg-white/55 before:content-[''] after:absolute after:bottom-[17px] after:right-[45px] after:h-[120px] after:w-[120px] after:rounded-full after:bg-white/55 after:content-['']"
          />

          <h1
            id="hero-title"
            className="pointer-events-auto absolute left-1/2 top-1/2 z-[1] m-0 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[1.5deg] text-center font-extrabold leading-[0.88] tracking-[-0.09em] text-[#ef5a51] [font-family:'Segoe_Print','Bradley_Hand',cursive] [font-size:clamp(64px,8vw,146px)] [text-shadow:0_5px_0_rgba(177,48,53,0.22),0_12px_28px_rgba(45,83,167,0.22)] max-sm:top-[43%] max-sm:w-[calc(100%-18px)] max-sm:leading-[0.86] max-sm:[font-size:clamp(55px,15.5vw,86px)]"
            aria-label="My Slide Presentation"
          >
            <span
              className="inline-block whitespace-nowrap max-sm:block"
              aria-hidden="true"
            >
              {"My Slide".split("").map((char, index) => (
                <span
                  className="inline-block opacity-0 transition-[color] duration-180 animate-[hero-char-in_850ms_cubic-bezier(0.2,0.8,0.2,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100 hover:text-[#fff2ad]"
                  style={{ "--char-delay": `${index * 42}ms` } as CSSProperties}
                  key={`${char}-${index}`}
                >
                  {char === " " ? "\u00a0" : char}
                </span>
              ))}
            </span>{" "}
            <span
              className="inline-block whitespace-nowrap text-[#e84e50] max-sm:block"
              aria-hidden="true"
            >
              {"Presentation".split("").map((char, index) => (
                <span
                  className="inline-block opacity-0 transition-[color] duration-180 animate-[hero-char-in_850ms_cubic-bezier(0.2,0.8,0.2,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100 hover:text-[#fff2ad]"
                  style={
                    { "--char-delay": `${(index + 8) * 42}ms` } as CSSProperties
                  }
                  key={`${char}-${index}`}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <div className="absolute left-[max(24px,calc((100%-1180px)/2))] top-[164px] z-[3] font-mono text-[10px] uppercase leading-[1.2] tracking-[0.13em] text-white/85 max-sm:left-[18px] max-sm:top-[142px] max-sm:text-[8px]">
            GE931
          </div>
          <div className="absolute bottom-[120px] left-[max(24px,calc((100%-1180px)/2))] z-[3] font-mono text-[10px] uppercase leading-[1.2] tracking-[0.13em] text-white/85 max-sm:bottom-[135px] max-sm:left-[18px] max-sm:text-[8px]">
            Thanaphat Thongburee
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-[4] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2">
            <ModelViewer
              ref={(element: HTMLElement | null) => {
                if (element) {
                  element.setAttribute("src", mascotModelSrc);
                  element.setAttribute("alt", "PromptCraft 3D mascot");
                }
              }}
              loading="eager"
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="12deg"
              camera-orbit="0deg 75deg 4m"
              field-of-view="30deg"
              shadow-intensity="0.25"
              exposure="1.1"
              environment-image="neutral"
              className="size-full animate-[mascot-float_7s_ease-in-out_900ms_infinite] motion-reduce:animate-none object-contain object-center opacity-[0.94] [filter:saturate(0.82)_contrast(1.05)] will-change-transform"
            />
          </div>

          <div className="absolute right-[max(24px,calc((100%-1180px)/2))] top-[167px] z-[3] grid size-[66px] rotate-[-4deg] place-content-center gap-[3px] rounded-[2px] border border-white/85 bg-[rgba(255,94,85,0.72)] text-center text-[color:var(--primary-foreground)] animate-[stamp-wiggle_4.5s_ease-in-out_1.4s_infinite] motion-reduce:animate-none max-sm:right-[18px] max-sm:top-[142px] max-sm:scale-[0.78]">
            <span className="text-[20px] font-bold leading-none">01</span>
            <span className="font-mono text-[8px] uppercase leading-none tracking-[0.05em]">
              refine
            </span>
          </div>
        </div>

        <div className="absolute bottom-[120px] right-[max(24px,calc((100%-1180px)/2))] z-[3] flex items-center justify-between gap-3 font-mono text-[10px] uppercase leading-[1.2] tracking-[0.13em] text-white/80 max-sm:bottom-[135px] max-sm:right-[18px] max-sm:text-[8px]">
          <span>keep the signal</span>
          <span className="h-px w-20 bg-white/50" />
          <span>refine the variable</span>
        </div>
      </div>
    </section>
  );
}
