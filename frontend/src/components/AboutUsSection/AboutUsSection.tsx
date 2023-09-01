import { motion } from 'framer-motion'
import aboutUsImg from '../../assets/homePage/aboutUs.png'
import aboutUsBadge from '../../assets/homePage/aboutUsBadge.png'
import aboutUsIcon from '../../assets/homePage/aboutUsIcon.png'
import aboutUsIcon2 from '../../assets/homePage/aboutUsIcon2.png'

const AboutUsSection = () => {
  return (
      <section className="text-gray-600 h-screen">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center justify-center h-screen">
          <div className="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img src={aboutUsImg} alt="img" className=''/> */}
            <motion.img
              src={aboutUsImg}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 xl:pl-24 md:pl-0 max-w-3xl ml-0 
          flex gap-10 flex-col items-start md:text-left  justify-center h-screen text-left">
            <div className='flex items-start gap-5 text-left'>
              <img src={aboutUsBadge} alt="img" className='md:w-20 md:h-20 w-16 h-16'/>
              <span>
                <p>// 01 . About Us</p>
                <h1 className='text-black text-xl xl:text-4xl lg:text-3xl md:text-2xl'>The #1 digital marketing services company</h1>
              </span>
            </div>
            <p className='md:ml-20 ml-0 xl:text-xl lg:text-lg md:text-medium text-sm'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
              ftyuu Ipsum has been the industry's standard book. It has survived not only
              five centuries, but also the leap into electronic typesetting.
            </p>
            <div className='md:ml-20 ml-0 flex flex-col gap-5'>
              <span className='flex gap-4'>
                <img src={aboutUsIcon} alt="img" className='md:w-20 md:h-20 w-16 h-16'/>
                <span>
                  <h1 className='text-black xl:text-2xl lg:text-xl text-lg'>Guaranteed Results</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>
              </span>
              <span className='flex gap-4'>
                <img src={aboutUsIcon2} alt="img" className='md:w-20 md:h-20 w-16 h-16'/>
                <span>
                  <h1 className='text-black xl:text-2xl lg:text-xl text-lg'>Team of Industry Experts</h1>
                  <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUsSection