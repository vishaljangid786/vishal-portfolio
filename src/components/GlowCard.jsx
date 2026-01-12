import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle}deg`);
  };

  return (
    <motion.div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      variants={fadeIn(
        index % 2 === 0 ? "up" : "down", // 🔥 up / down alternate
        "spring",
        index * 0.25, // 🔥 ek-ek karke delay
        0.9
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -8, // 🔥 lift
        scale: 1.02, // 🔥 slight zoom
      }}
      className="card card-border timeline-card rounded-xl p-8 mb-5 break-inside-avoid-column transition-transform">
      <div className="glow"></div>

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </motion.div>
  );
};

export default GlowCard;
