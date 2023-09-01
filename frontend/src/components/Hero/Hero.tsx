import { motion } from 'framer-motion'

const Hero = () => {
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const text = "Digital technologies in all spheres of life: fast, convenient and efficient.";
  const words = text.split(" "); // Разбиваем текст на отдельные слова

  return (
    <div>
      <section className="text-gray-600 bg-hero-pattern relative lg:bg-center bg-top-right h-screen">
        <div className="container h-screen mx-auto flex px-5 md:py-24 py-40 md:flex-row flex-col justify-center md:justify-start lg:justify-center items-center">
          <div className="lg:flex-grow md:w-1/2 lg:ml-20 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center">
            <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-4xl mb-4 font-bold w-[320px] md:w-[400px] lg:w-[500px] xl:w-[620px] text-gray-900">
              <motion.div
                style={{  display: "flex", flexWrap: 'wrap' }}
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span
                  variants={child}
                  style={{ marginRight: "5px" }}
                  key={index}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.div>
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero