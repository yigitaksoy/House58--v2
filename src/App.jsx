import { AnimatePresence } from "framer-motion";
import "./assets/css/style.css";
import { GridPattern } from "./components/GridPattern";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";
import ScrollTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="font-objektiv">
      <BrowserRouter>
        <AnimatePresence>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
        </AnimatePresence>
        <ScrollTop />
        <AnimatePresence mode="wait">
          <main className="relative isolate flex w-full flex-col bg-house-black mt-2 pt-14 overflow-hidden">
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-house-bluelight stroke-house-600 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />
            <Hero />
            <Services />
            <TechStack />
          </main>
          <footer>
            <Footer />
          </footer>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
