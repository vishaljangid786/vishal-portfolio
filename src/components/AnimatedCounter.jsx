import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div
      id="counter"
      ref={counterRef}
      className="padding-x-lg xl:mt-0 mt-32 mx-10 sm:mx-5 md:mx-14">
      <motion.div variants={textVariant()} className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-tertiary rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(AnimatedCounter, "");
