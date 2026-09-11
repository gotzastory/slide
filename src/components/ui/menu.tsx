import type { LucideIcon } from "lucide-react";

type DockItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  src?: string;
  tone: string;
};

const dockItems: DockItem[] = [
  {
    label: "About",
    href: "#method",
    src: "/image/menu/macos-notes.png",
    tone: "notes",
  },
  {
    label: "Projects",
    href: "#modules",
    src: "/image/menu/macos-photos.png",
    tone: "photos",
  },
  {
    label: "Keynote",
    href: "#about",
    src: "/image/menu/macos-keynote.png",
    tone: "keynote",
  },
];

export function Menu() {
  return (
    <nav
      className="group/dock fixed bottom-[max(18px,env(safe-area-inset-bottom))] left-1/2 z-30 flex h-[88px] w-max max-w-[calc(100vw-24px)] flex-row items-center justify-center gap-2 rounded-[20px] border border-[#e6e6eb] bg-[rgba(247,247,247,.32)] p-[9px] font-sans text-xs text-black shadow-[rgba(0,0,0,.25)_0_2px_6px_0,rgba(255,255,255,.32)_0_2px_6px_0_inset] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [transform:translateX(-50%)] [transition:all] after:pointer-events-none after:absolute after:inset-0 after:block after:h-full after:w-full after:rounded-[20px] after:border after:border-[#e6e6eb] after:bg-transparent after:opacity-100 after:content-[''] max-[520px]:bottom-[max(12px,env(safe-area-inset-bottom))]"
      aria-label="About Projects Services"
    >
      <div className="relative z-[1] flex items-center gap-2 max-[520px]:w-full max-[520px]:justify-center">
        {dockItems.map(({ label, href, icon: Icon, src, tone }) => (
          <a
            className="group relative block h-[62px] w-[62px] origin-bottom text-[#14294a] no-underline transition-[transform,opacity] duration-[650ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)] hover:z-[2] hover:-translate-y-[12px] hover:scale-[1.24] focus-visible:z-[2] focus-visible:-translate-y-[12px] focus-visible:scale-[1.24] focus-visible:rounded-[18px] focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-4 group-has-[.group:hover]/dock:[&:not(:hover)]:translate-y-[5px] group-has-[.group:hover]/dock:[&:not(:hover)]:scale-[.84] group-has-[.group:hover]/dock:[&:not(:hover)]:opacity-[.78] group-has-[.group:focus-visible]/dock:[&:not(:focus-visible)]:translate-y-[5px] group-has-[.group:focus-visible]/dock:[&:not(:focus-visible)]:scale-[.84] group-has-[.group:focus-visible]/dock:[&:not(:focus-visible)]:opacity-[.78] motion-reduce:duration-[.01ms] motion-reduce:hover:transform-none motion-reduce:focus-visible:transform-none"
            data-tone={tone}
            href={href}
            key={href}
          >
            <span className="absolute bottom-[calc(100%+10px)] left-1/2 pointer-events-none whitespace-nowrap rounded-[7px] border border-[#e6e6eb] bg-white px-3 py-[5px] text-xs font-medium leading-[1.3] text-black opacity-0 shadow-[0_1px_2px_rgba(0,0,0,.25)] transition-[opacity,transform] duration-[400ms] [transform:translate(-50%,7px)_scale(.92)] [transition-timing-function:cubic-bezier(.22,1,.36,1)] after:absolute after:bottom-[-4px] after:left-1/2 after:h-2 after:w-2 after:rotate-45 after:border-b after:border-r after:border-[#e6e6eb] after:bg-white after:content-[''] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:duration-[.01ms]">
              {label}
            </span>
            <span
              className="grid h-full w-full place-items-center overflow-hidden rounded-[18px] border-0 shadow-[0_5px_10px_rgba(13,26,50,.18),inset_0_1px_1px_rgba(255,255,255,.62)] data-[tone=apple]:bg-[linear-gradient(145deg,#6e87b9,#284776)] data-[tone=apple]:text-[#f7fbff] data-[tone=notes]:bg-[#fffdf8] data-[tone=photos]:bg-[#f7f5ec] data-[tone=keynote]:bg-[#fff5e8]"
              aria-hidden="true"
            >
              {src ? (
                <img
                  className="block h-full w-full scale-[1.08] object-cover"
                  src={src}
                  width={256}
                  height={256}
                  alt=""
                />
              ) : (
                Icon && <Icon size={31} strokeWidth={1.7} />
              )}
            </span>
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
