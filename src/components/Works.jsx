import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Individual project card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px] sm:text-[22px] md:text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px] sm:text-[15px] md:text-[16px] leading-[26px] sm:leading-[28px] md:leading-[30px]'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Section container for all projects
const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} text-[14px] sm:text-[16px]`}>
          Selected Work
        </p>
        <h2
          className={`${styles.sectionHeadText} text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]`}
        >
          Projects.
        </h2>
      </motion.div>


      <div className='w-full flex'>
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 max-w-full text-secondary text-[14px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[28px] md:leading-[30px]'
        >
          These projects demonstrate my ability to solve real-world problems
          through engineering, systems thinking, and user-centric design. While
          most were built as prototypes or for specific use cases, they reflect
          my strength in building scalable infrastructure, applying AI
          strategically, and aligning technical execution with business goals.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
