import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
  live,
}) => {
  return (
    <motion.div variants={fadeIn("up", "string", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end gap-3 m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
                <img
                  src={github}
                  alt="github"
                  className="object-contain w-1/2 h-1/2"
                />
              </div>
            )}
            {live && (
              <div
                onClick={() => window.open(live, "_blank")}
                className="flex items-center justify-center w-16 h-10 bg-red-500 rounded-full cursor-pointer">
                <h1>Live</h1>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects efficiently.
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project=${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
