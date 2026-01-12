import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, staggerContainer } from "../utils/motion";

const Feedbacks = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full">
        {/* Heading animation */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10">
          <p className={styles.sectionSubText}>What Others say?</p>
          <h2 className={styles.sectionHeadText}>Feedbacks</h2>
        </motion.div>

        {/* Cards stagger animation */}
        <div className="lg:columns-2 md:columns-1 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={index} card={testimonial} index={index}>
              <div className="flex items-center gap-3">
                <img src={testimonial.imgPath} alt="" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "feed");
