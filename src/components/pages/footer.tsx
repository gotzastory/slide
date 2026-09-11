import { AtSign, Mail, Phone, X } from "lucide-react";

const footerLinks = [
  ["About", "#method"],
  ["Projects", "#modules"],
  ["Principles", "#about"],
] as const;

const socialLinks = [
  { label: "Instagram", href: "#top", icon: AtSign },
  { label: "X", href: "#top", icon: X },
  { label: "Phone", href: "#top", icon: Phone },
  { label: "Email", href: "#top", icon: Mail },
] as const;

export function Footer() {
  return (
    <footer
      className="relative z-[3] mt-[10px] overflow-hidden bg-[#f8ef9b] px-0 pb-5 pt-[30px] text-[#20242a] max-[640px]:mt-[83px] max-[640px]:pt-4"
      aria-labelledby="footer-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden font-black uppercase leading-[.72] tracking-[-.1em] text-[#fff9cb]/70"
      >
        <span className="absolute -left-5 top-[-.12em] rotate-[-7deg] text-[clamp(110px,19vw,290px)]">
          Got
        </span>
        <span className="absolute -right-10 bottom-[-.07em] rotate-[5deg] text-[clamp(100px,18vw,270px)]">
          Chan
        </span>
      </div>

      <div className="relative mx-auto px-[30px] max-[640px]:px-4">
        <div className="relative isolate min-h-[690px] overflow-hidden rounded-[30px] bg-[#5e80aa] text-white shadow-[0_18px_45px_rgba(57,67,44,.16)] max-[900px]:min-h-[650px] max-[640px]:min-h-[630px] max-[640px]:rounded-[22px]">
          <img
            className="absolute inset-0 -z-20 size-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] motion-reduce:transition-none"
            src={`${import.meta.env.BASE_URL}image/case/image.png`}
            width={1672}
            height={941}
            alt=""
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(33,71,112,.72)_0%,rgba(54,85,103,.2)_42%,rgba(21,41,44,.68)_100%)]" />

          <div className="relative flex min-h-[690px] flex-col p-[37px] max-[900px]:min-h-[650px] max-[640px]:min-h-[630px] max-[640px]:p-5">
            <div className="flex items-start justify-between gap-8 max-[640px]:flex-col">
              <div
                className="flex items-center gap-2.5"
                aria-label="Social links"
              >
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    className="grid size-11 place-items-center rounded-full bg-white/90 text-[#172331] transition-transform hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3 motion-reduce:transition-none"
                    href={href}
                    aria-label={label}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </a>
                ))}
              </div>

              <p className="m-0 max-w-[310px] text-right text-[clamp(17px,2vw,25px)] font-semibold leading-[1.08] tracking-[-.055em] max-[640px]:max-w-[270px] max-[640px]:text-left">
                <span className="mr-2 inline-block h-px w-6 align-middle bg-white/80" />
                Have an idea?
                <br />
                Let&apos;s turn it into a sharp digital experience.
              </p>
            </div>

            <div className="mt-auto">
              <h2
                id="footer-title"
                className="m-0 max-w-[790px] text-[clamp(54px,9vw,132px)] font-black uppercase leading-[.82] tracking-[-.105em] text-white drop-shadow-[0_5px_0_rgba(27,55,54,.18)] max-[640px]:text-[clamp(47px,15vw,84px)]"
              >
                Let&apos;s build
                <br />
                something
                <br />
                memorable.
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 py-[27px] max-[700px]:items-start max-[700px]:flex-col max-[700px]:gap-4 max-[520px]:pb-[108px]">
          <a
            className="inline-flex min-h-11 items-center text-[clamp(22px,3vw,32px)] font-black uppercase tracking-[-.08em] text-[#20242a] no-underline"
            href="#top"
          >
            Prompt<span className="text-[#527cad]">Craft</span>
            <sup className="ml-0.5 text-[10px] align-super">®</sup>
          </a>
          <nav
            className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[11px] font-medium uppercase tracking-[.04em]"
            aria-label="Footer navigation"
          >
            {footerLinks.map(([label, href]) => (
              <a
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-[#20242a] no-underline transition-colors hover:text-[#527cad] focus-visible:outline-2 focus-visible:outline-[#20242a] focus-visible:outline-offset-4"
                key={href}
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>
          <span className="text-[10px] uppercase tracking-[.08em] text-[#4e5947]">
            © 2026 PromptCraft
          </span>
        </div>
      </div>
    </footer>
  );
}
