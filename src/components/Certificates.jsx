import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { certificates } from "../constants"; // This should be an array of certificate data

const CertificateCard = ({ index, title, organization, image, link }) => {
  const handleDownload = () => {
    const fileName = `${title}.jpg`;
    const downloadUrl = image.includes("cloudinary")
      ? image.replace("/upload/", "/upload/fl_attachment/")
      : image;

    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show">
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] h-96 w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute flex gap-2 bottom-3 right-3">
            {link && (
              <div
                onClick={() => window.open(link, "_blank")}
                className="px-4 py-2 text-sm text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
                View
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div>
            <h3 className="text-white font-bold text-[20px]">{title}</h3>
            <p className="mt-1 text-secondary text-[14px]">
              Issued by: {organization}
            </p>
          </div>

          <div onClick={handleDownload} className="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9131/9131795.png"
              alt="Download certificate"
              title="Download certificate"
              className="w-12 h-10 p-2 transition cursor-pointer invert hover:opacity-100 opacity-80"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My History</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]">
          Here are some certifications I’ve earned that demonstrate my
          dedication to continuous learning and skill development in various
          technologies and domains.
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
