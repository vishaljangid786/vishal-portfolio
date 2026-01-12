import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  Certificates,
  StarsCanvas,
  AnimatedCounter,
  LogoShowcase,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <AnimatedCounter />
        <Tech />
        <Works />
        <Certificates />
        <LogoShowcase />
        <Feedbacks />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
      </div>
      <footer className="w-full border-t border-white/10 bg-tertiary">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Email */}
            <a
              href="mailto:yourname@email.com"
              className="text-white-50 text-sm hover:text-white transition">
              vishaljangid80550786@email.com
            </a>

            {/* Center - Copyright */}
            <p className="text-white-50 text-sm text-center">
              © {new Date().getFullYear()} Vishal Jangid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
