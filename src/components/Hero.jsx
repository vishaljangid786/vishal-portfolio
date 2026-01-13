import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        ref={heroRef}
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
          <motion.p
            variants={itemUp}
            className="mt-6 max-w-xl  xl-720:hidden  text-secondary text-[16px] md:text-[18px] leading-relaxed">
            I build modern, scalable web experiences that combine clean design,
            smooth interactions, and strong performance — turning ideas into
            products people actually love to use.
          </motion.p>
        </motion.div>
      </div>
      <img
        src="/images/hero.png"
        alt=""
        className="
    absolute 
    bottom-10 sm:bottom-16 lg:bottom-20
    left-1/2 lg:left-2/3
    -translate-x-1/2

    w-[85vw]
    sm:w-[500px]
    md:w-[600px]
    lg:w-[700px]
    xl:w-[800px]

    max-w-[90vw]
    rounded-2xl
    brightness-50
    pointer-events-none
  "
        style={{
          WebkitMaskImage: `
      linear-gradient(
        to bottom,
        transparent 0%,
        black 8%,
        black 92%,
        transparent 100%
      ),
      linear-gradient(
        to right,
        transparent 0%,
        black 8%,
        black 92%,
        transparent 100%
      )
    `,
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
        }}
      />

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
