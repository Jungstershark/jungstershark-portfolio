import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className='bg-black-200 p-6 sm:p-8 rounded-3xl xs:w-[300px] sm:w-[320px] w-full'
  >
    <p className='text-white font-black text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[14px] sm:text-[16px] md:text-[18px] leading-[26px]'>
        {testimonial}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[11px] sm:text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          className='w-10 h-10 rounded-full object-cover'
          alt={`feedback_by-${name}`}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className={`${styles.sectionSubText} text-[14px] sm:text-[16px]`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
