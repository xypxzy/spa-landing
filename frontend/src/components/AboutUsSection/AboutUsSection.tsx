import { motion } from 'framer-motion'
import { FC } from 'react'
import aboutUsImg from '../../assets/homePage/aboutUs.png'
import aboutUsBadge from '../../assets/homePage/aboutUsBadge.png'
import aboutUsIcon2 from '../../assets/homePage/aboutUsIcon2.png'
import { DataProps, TagsProps } from '../../pages/HomePage/Home'

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
      delay: custom * 0.15, // Задержка анимации
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
      delay: custom * 0.1, // Задержка анимации
    },
  }),
}

interface AboutUsSectionProps {
  data: DataProps;
}

const AboutUsSection: FC<AboutUsSectionProps> = ({data}) => {

  if(!data ) {
    return null;
  }

  return (
      <motion.section
        initial='hidden'
        whileInView={'visible'}
        viewport={{amount: 0.1, once: true}}
        className="text-gray-600 h-screen"
      >
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center justify-center h-screen">
          <motion.div
            className="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{opacity:1, x: 0}}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              x: {
                type: "spring", 
                damping: 10, 
                stiffness: 100, 
              },
            }}
          >
            <motion.img
              src={aboutUsImg}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            />
          </motion.div>
          <div className="lg:flex-grow md:w-1/2 xl:pl-24 md:pl-0 max-w-3xl ml-0 
          flex gap-10 flex-col items-start md:text-left  justify-center md:h-screen h-full text-left">
            <div className='flex items-start gap-5 text-left'>
              <img src={aboutUsBadge} alt="img" className='md:w-20 md:h-20 w-16 h-16'/>
              <span>
                <motion.p custom={1} variants={headerAnimation}>{data?.pre_title}</motion.p>
                <motion.h1 
                  custom={2}
                  variants={headerAnimation} 
                  className='text-black text-xl xl:text-4xl lg:text-3xl md:text-2xl'
                >
                    {data?.title}
                </motion.h1>
              </span>
            </div>
            <motion.p 
              custom={3}
              variants={textAnimation}
              className='md:ml-20 ml-0 xl:text-xl lg:text-lg md:text-medium text-sm'
            >
              {data?.description}
            </motion.p>
            <div className='md:ml-20 ml-0 flex flex-col gap-5'>
              {data?.theses && data?.theses.length > 0 && (
                data.theses.map((tag: TagsProps) => (
                  <span key={tag.id} className='flex gap-4'>
                    <motion.img custom={7} variants={textAnimation} src={aboutUsIcon2} alt="img" className='md:w-20 md:h-20 w-16 h-16'/>
                    <span>
                      <motion.h1 custom={7} variants={textAnimation} className='text-black xl:text-2xl lg:text-xl text-lg'>{tag.title}</motion.h1>
                      <motion.p custom={8} variants={textAnimation}>{tag.description}</motion.p>
                    </span>
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.section>
  )
}

export default AboutUsSection
