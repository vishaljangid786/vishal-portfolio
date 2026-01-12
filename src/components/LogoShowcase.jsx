import { logoIconsList } from "../constants/index.js";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion.js";

const LogoIcon = ({ icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 0.6)}
      whileHover={{ scale: 1.1 }}
      className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </motion.div>
  );
};

const LogoShowcase = () => {
  return (
    <motion.div className="md:my-20 my-10 relative mx-10 overflow-hidden">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52 overflow-hidden">
        <motion.div
          className="flex marquee-box md:gap-12 gap-5"
          variants={staggerContainer(0.15, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}>
          {[...logoIconsList, ...logoIconsList].map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};


export default LogoShowcase;
