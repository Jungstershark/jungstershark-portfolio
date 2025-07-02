import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Responsive label text */}
        <p className={`${styles.sectionSubText} text-[14px] sm:text-[16px]`}>
          Introduction
        </p>
        {/* Responsive heading */}
        <h2 className={`${styles.sectionHeadText} text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]`}>
          Overview.
        </h2>
      </motion.div>

      {/* Responsive paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-full text-secondary text-[14px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[28px] md:leading-[30px]'
      >
        As a SEA Games 🥇 Gold Medalist turned technologist, I've built my career at the intersection of discipline, engineering, and strategy. With over $4M in value delivered across Shopee, Agoda, and Deloitte, I bring a rare blend of execution and leadership — from scaling AI infra to reshaping user workflows for 100K+ daily users.

        Beyond engineering, I care deeply about human potential. I’ve led student government, national initiatives, and my university’s swim team to historic success — all while balancing elite sport with academic excellence. My mission is to build a more equitable, efficient Southeast Asia through technology and consulting.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
