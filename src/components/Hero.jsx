import { motion } from 'framer-motion';
import { styles } from '../styles'
import { headshot } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5E64FF]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className='text-[#5E64FF]'><br className='block sm:hidden'/> Jung Yi</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='text-[#5E64FF]'>Welcome to my portfolio!</span>
          </p>
          <p className={`${styles.heroSubSubText} mt-2 text-white-100`}>
            👨‍🎓 Second-Year Honours Student in Computer Science and Design at SUTD
            <br className='block'/>🏅 Global Distinguished Scholar & SEA Games Champion
            <br className='block'/>🚀 Innovator | Developer | Researcher
          </p>

          <img src={headshot} alt="Jung Yi's Profile" className="mx-auto mt-6 w-80 h-80 rounded-full object-cover" />
        </div>
      </div>

      


      <div className='absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center'>
        <a href = "#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
          </div>

        </a>
      </div>
    </section>
    )
}

export default Hero




