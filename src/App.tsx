import type { CSSProperties } from "react";
import { CaseStudies } from "./components/pages/casestudie";
import { Menu } from "./components/ui/menu";
import { Hero } from "./components/pages/hero";
import { About } from "./components/pages/about";
import { Slideshow } from "./components/ui/slideshow";
import { Footer } from "./components/pages/footer";
import { assetUrl } from "./lib/utils";

const assetStyles = {
  "--paper-grid-bg": `url("${assetUrl("image/bg/creatie-creative-designer-portfolio.image.eOYxEIuj9eit1MkxUJQwRtgpmw.Woblo.png")}")`,
  "--decor-68": `url("${assetUrl("image/bg/creatie-creative-designer-portfolio.svg.svg-68.Woblo.svg")}")`,
  "--decor-69": `url("${assetUrl("image/bg/creatie-creative-designer-portfolio.svg.svg-69.Woblo.svg")}")`,
  "--decor-70": `url("${assetUrl("image/bg/creatie-creative-designer-portfolio.svg.svg-70.Woblo.svg")}")`,
  "--decor-71": `url("${assetUrl("image/bg/creatie-creative-designer-portfolio.svg.svg-71.Woblo.svg")}")`,
  "--decor-78": `url("${assetUrl("image/bg/creatie-creative-designer-portfolio.svg.svg-78.Woblo.svg")}")`,
} as CSSProperties;


function App() {
  return (
    <div style={assetStyles} className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:text-[#2b1b14] focus:shadow-lg"
        href="#top"
      >
        Skip to main content
      </a>
      <Menu />
      <main id="top" className="paper-grid">
        <Hero />
        <About />
        <CaseStudies />
        <Slideshow />
        <Footer />
      </main>
    </div>
  );
}

export default App;
