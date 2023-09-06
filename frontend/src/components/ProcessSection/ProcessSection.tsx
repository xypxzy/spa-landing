import { motion } from 'framer-motion'
import processSection1 from '../../assets/homePage/proccessSection1.png'
import processSection2 from '../../assets/homePage/proccessSection2.png'
import processSection3 from '../../assets/homePage/proccessSection3.png'
import processIcon from '../../assets/homePage/processIcon.png'

import { FC } from 'react'
import { DataProps } from '../../pages/HomePage/Home'
import cls from './ProcessSection.module.css'

const processAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}


const headerAnimation = {
hidden: {
  y: -50, // Начальное смещение хедера вверх
  opacity: 0, // Начальная непрозрачность
  scale: 0.8, // Начальный масштаб (можно настроить)
},
visible: (custom: number) => ({
  y: 0, // Конечное смещение хедера (хедер останется на месте)
  opacity: 1, // Конечная непрозрачность (хедер будет полностью видимым)
  scale: 1, // Конечный масштаб (обычно 1 для естественного размера)
  transition: {
    type: 'spring', // Использовать пружинный тип анимации для плавности
    damping: 10, // Коэффициент затухания (уменьшьте или увеличьте по желанию)
    stiffness: 80, // Жесткость пружины (уменьшьте или увеличьте по желанию)
    delay: custom * 0.2, // Задержка анимации
  },
}),
}

const textAnimation = {
  hidden: {
    y: 50, // Начальное смещение по вертикали
    opacity: 0, // Начальная непрозрачность
  }, 
  visible: (custom: number) => ({
    y: 0, // Конечное смещение по вертикали (текст останется на месте)
    opacity: 1, // Конечная непрозрачность (текст будет полностью видимым)
    transition: {
      type: 'spring', // Использовать пружинный тип анимации для плавности
      damping: 8, // Коэффициент затухания (уменьшьте или увеличьте по желанию)
      stiffness: 60, // Жесткость пружины (уменьшьте или увеличьте по желанию)
      delay: custom * 0.2, // Задержка анимации
    },
  }),
}

interface ProcessSectionProps {
  data: DataProps;
}


const ProcessSection: FC<ProcessSectionProps> = ({data}) => {
  
  if(!data) {
    return null;
  }

  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{amount: 0.5, once: true}} className={cls.process}>
      <div className={cls.process__container}>
        <div className={cls.process__wrapper}>
          <div className={cls.process__header}>
            <img src={processIcon} alt="" className='xl:w-20 lg:h-20 h-14 w-14' />
            <motion.span  variants={textAnimation}>
              <motion.p custom={1} variants={headerAnimation} className={cls.process__header_paragraph}>{data?.pre_title}</motion.p>
              <motion.h1 custom={2} variants={headerAnimation} className={cls.process__header_title}>{data?.title}</motion.h1>
            </motion.span>
          </div>

          <div className={cls.process__steps_card}>
            <motion.div
              custom={4}
              variants={processAnimation}
              className='flex md:flex-row flex-col justify-between items-center'>
              <img src={processSection1} alt="" className='xl:ml-24 ml-0 w-[250px] lg:w-[298px] md:h-[200px] hidden md:block' />
              <div className={cls.process__card__step}>
                <div className={`${cls.process__card_step__line} border-transparent`}></div>
                <div className={cls.process__card_step_icon}>1</div>
                <div className={cls.process__card_step__line}></div>
              </div>
              <div className='md:w-[40%] w-full '>
                <h2 className={cls.process__card_title}>{data?.theses[0].title}</h2>
                <p className={cls.process__card_description}>{data?.theses[0].description}</p>
              </div>
            </motion.div>
            <motion.div
              custom={5}
              variants={processAnimation}
              className='flex md:flex-row flex-col justify-between items-center'>
                <div className={`${cls.process__card_step_icon} md:hidden`}>
                  2
                </div>
              <div className='xl:w-[33.7%] w-[100%] md:text-right text-left lg:ml-0 ml-1'>
                <h2 className={cls.process__card_title}>{data?.theses[1].title}</h2>
                <p className={cls.process__card_description}>{data?.theses[1].description}</p>
              </div>
              <div className={`${cls.process__card__step} md:flex hidden`}>
                <div className={cls.process__card_step__line}></div>
                <div className={`${cls.process__card_step_icon} md:flex hidden`}>
                  2
                </div>
                <div className={cls.process__card_step__line}></div>
              </div>
              <img src={processSection2} alt="" className='xl:ml-28 ml-0 mr-0 lg:mr-14 h-[100px] md:h-[200px] hidden md:block' />
            </motion.div>

            <motion.div
              custom={6}
              variants={processAnimation}
              className='flex md:flex-row flex-col justify-between items-center'>
              <img src={processSection3} alt="" className='xl:ml-[75px] ml-0 mr-0 lg:mr-12 md:h-[200px] hidden md:block' />
              <div className={cls.process__card__step}>
                <div className={cls.process__card_step__line}></div>
                <div className={cls.process__card_step_icon}>
                  3
                </div>
                <div className={`${cls.process__card_step__line} border-transparent`}></div>
              </div>
              <div className='md:w-[40%] w-[100%] lg:ml-0 ml-6'>
                <h2 className={cls.process__card_title}>{data.theses.length > 0 && data.theses[0].title && data.theses[2].title}</h2>
                 <p className={cls.process__card_description}>{data?.theses[2].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>  
    </motion.section>
  )
}

export default ProcessSection;