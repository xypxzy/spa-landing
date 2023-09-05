import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { TeamProps } from '../../const/about'
import { ValuesProps } from '../../pages/aboutUs/AboutUs'
import CarouselC from '../carouselCard/CarouselC'
import { TeamM } from '../teamCard/TeamC'

interface CarouselProps {
    values: ValuesProps[] | TeamProps[];
    isTeam: boolean;
}

const Carousel: FC<CarouselProps> = ({values, isTeam}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % values.length);
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? values.length - 1 : prevIndex - 1
      );
    };


    return(
        <motion.section 
            className={`${!isTeam ? 'bg-[#292930]' : 'bg-white'} w-full py-[50px] px-[70px]`}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
        >
            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            <div className="relative h-[800px] overflow-hidden rounded-lg md:h-[600px] my-10 flex justify-center items-center">
                {(values).map((item, index) => (
                <div
                    key={index}
                    className={`${
                    index === activeIndex ? 'block' : 'hidden'
                    } duration-700 ease-in-out`}
                    data-carousel-item={index === activeIndex ? 'active' : ''}
                >
                    {isTeam ? <TeamM team={item as TeamProps} /> : <CarouselC  carousel={item as ValuesProps} index={index}/>}
                </div>
                ))}
            </div>
            <div className="absolute z-5 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2">
                {values.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    aria-current={index === activeIndex ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    data-carousel-slide-to={index}
                    onClick={() => setActiveIndex(index)}
                ></button>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 -left-10 z-5 flex items-center justify-center h-full md:px-4 px-0 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className={`w-4 h-4 ${!isTeam ? 'text-white dark:text-gray-800' : 'text-gray-800 dark:text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 -right-10 z-5 flex items-center justify-center h-full md:px-4 px-0 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className={`w-4 h-4 ${!isTeam ? 'text-white dark:text-gray-800' : 'text-gray-800 dark:text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            </div>
        </motion.section>
    )
}
export default Carousel