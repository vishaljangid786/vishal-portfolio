import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { fadeIn, textVariant } from "../utils/motion";

gsap.registerPlugin(useGSAP);

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
];

const Hero = () => {
  const heroRef = useRef(null);
  useGSAP(
    () => {
      const items = gsap.utils.toArray(".wrapper > span");
      if (!items.length) return;

      const itemHeight = items[0].offsetHeight;
      const totalItems = items.length / 2;

      gsap.set(".wrapper", { y: 0 });

      const tl = gsap.timeline({ repeat: -1 });

      for (let i = 0; i < totalItems; i++) {
        tl.to(".wrapper", {
          y: -(itemHeight * (i + 1)),
          duration: 0.6,
          ease: "power3.inOut",
        }).to({}, { duration: 1.5 });
      }

      tl.set(".wrapper", { y: 0 });
    },
    { scope: heroRef }
  );
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemUp = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section ref={heroRef} className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex gap-5`}>
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#015eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div variants={container} initial="hidden" animate="show">
          {/* Heading */}
          <motion.h1
            variants={itemUp}
            className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Vishal</span>
          </motion.h1>

          <div className="hero-text">
            {/* Shaping + Slider */}
            <motion.h1 variants={itemUp} className="relative">
              Shaping
              <span className="slide">
                <span className="wrapper block">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 h-[32px] md:h-[44px]">
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="w-6 h-6 md:w-8 md:h-8 bg-white p-2 rounded-full"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </motion.h1>

            {/* Line 2 */}
            <motion.h1 variants={itemUp}>into Real Projects</motion.h1>

            {/* Line 3 */}
            <motion.h1 variants={itemUp}>that Deliver Results</motion.h1>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 top-0 left-0 w-full h-full">
        <ComputersCanvas />
      </div>

      <a
        href="#about"
        className="absolute bottom-32 w-full  cursor-pointer hidden sm:flex justify-center">
        <div className="border-4 border-white rounded-full h-16 absolute justify-center items-center w-8 flex">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3  mb-4 rounded-full bg-secondary"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
