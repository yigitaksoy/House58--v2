import { AnimatePresence } from "framer-motion";
import "./assets/css/style.css";
import Hero from "./sections/Hero";
import { GridPattern } from "./components/GridPattern";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="font-objektiv">
      <BrowserRouter>
        <AnimatePresence></AnimatePresence>
        <AnimatePresence mode="wait">
          <main className="relative isolate flex w-full flex-col bg-white mt-2 pt-14 overflow-hidden">
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-96}
              interactive
            />
            <Hero />
          </main>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
