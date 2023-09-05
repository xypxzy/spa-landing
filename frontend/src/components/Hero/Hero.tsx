import { motion } from 'framer-motion';
import frame1 from '../../assets/homePage/hero-frame.png';
import frame2 from '../../assets/homePage/hero-frame-2.png';
import frame3 from '../../assets/homePage/hero-frame-3.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  const text = t('homeTitle');

  const words = text.split(' '); // Разбиваем текст на отдельные слова

  return (
    <div>
      <section className="text-gray-600 bg-hero-pattern relative lg:bg-center h-screen">
        <div className="container h-screen mx-auto flex px-5 md:py-24 py-40 md:flex-row flex-col justify-center md:justify-start lg:justify-center items-center">
          <div className="md:flex-grow md:flex-row flex-col md:w-1/2 lg:ml-20 flex text-left mb-16 md:mb-0 items-center">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-4 font-bold  w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[720px] text-gray-900">
              <motion.div
                style={{ display: 'flex', flexWrap: 'wrap' }}
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span
                    variants={child}
                    style={{ marginRight: '18px' }}
                    key={index}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.div>
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:inline-block w-1/2 md:h-screen relative"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                src={frame1}
                alt=""
                className="md:h-[300px] lg:h-[420px] xl:h-[500px] 2xl:h-[520px] absolute md:top-72 lg:top-44 2xl:left-28 xl:left-5 md:left-5 left-0"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                src={frame2}
                alt=""
                className="hidden lg:block lg:h-[120px] 2xl:h-[150px] absolute bottom-60 2xl:left-20 left-16"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                src={frame3}
                alt=""
                className="hidden lg:block lg:h-[120px] 2xl:h-[150px] absolute bottom-32 2xl:-right-10 lg:-right-8 right-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
