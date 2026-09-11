import { CaseStudies } from "./components/pages/casestudie";
import { Menu } from "./components/ui/menu";
import { Hero } from "./components/pages/hero";
import { About } from "./components/pages/about";
import { Slideshow } from "./components/ui/slideshow";
import { Footer } from "./components/pages/footer";



function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
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
