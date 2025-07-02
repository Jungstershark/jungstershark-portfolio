// Hero.jsx
// Top section: Introduces Jung Yi with credibility, impact, and CTA positioning.
// Layout is unchanged — only textual content is updated for strategic resonance.

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { headshot } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Blue dot and vertical line as visual marker */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5E64FF]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient'/>
        </div>

        {/* Core identity and credentials */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#5E64FF]'><br className='block sm:hidden'/> Jung Yi</span>
          </h1>

          {/* Welcome line */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='text-[#5E64FF]'>
              Consulting-Tech Strategist | SEA Games Champion | Builder
            </span>
          </p>

          <p className={`${styles.heroSubSubText} mt-2 text-white-100`}>
            🎓 Final-Year Computer Science (Honours) Student @ SUTD (GPA: 4.3/5.0)<br />
            💼 Delivered $4M+ impact across Shopee, Agoda, Deloitte through AI, infra & UX<br />
            🌏 Mission: Redefine opportunity in Southeast Asia through tech and strategy
          </p>

          {/* Professional headshot (can be updated later) */}
          <img
            src={headshot}
            alt="Jung Yi's Profile"
            className="mx-auto mt-6 rounded-full object-cover
                      w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;
