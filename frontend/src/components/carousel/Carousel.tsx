import style from './Carousel.module.css'
import icon from '../../assets/aboutAs/IconOr.png'
import { useState } from 'react'
import {motion} from 'framer-motion'
import { ContentM } from '../carouselCard/CarouselC'

const Carousel = () => {
    const [translateValue, setTranslateValue] = useState<number>(0);
    console.log(translateValue)

    const textAnim = {
        hidden:{
            x: -500,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }
  

    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const scrollAmount = event.deltaY;
        setTranslateValue(translateValue + scrollAmount);

         // Decrease by 10px
        if (translateValue <= -1000) {
            const newTranslateValue = translateValue + 20
            setTranslateValue(newTranslateValue);
        }
        if (translateValue >= 0) {
            const newTranslateValueBack = translateValue - 20
            setTranslateValue(newTranslateValueBack);
        }
    };
    const handleCliclNextScroll = () => {
        setTranslateValue(translateValue - 400);

        if (translateValue <= -1600) {
          setTranslateValue(translateValue + 400);
        }
    };
    const handleCliclBackScroll = () => {

        setTranslateValue(translateValue + 400);

        if (translateValue >= 0) {
          setTranslateValue(translateValue - 400);
        }
    };


    return(
        <motion.section 
            className={style.carousel_a}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.5, once: true}}
        >
            <motion.div className={style.withoutCar} custom={1} variants={textAnim}>
                <img src={icon} alt="icon" width='80px' className={style.image_hghg}/>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#FEC90C'}}>//</span><span style={{color: '#D0D0D0'}}>02 . OUR VALUES</span></p>
                    <p>The core values behind our work</p>
                </div>
            </motion.div>

            <section className={style.carousel} >
                <div className={style.rotation}  
                    style={{
                        transform: `translateX(${translateValue}px)`,
                    }}
                    onWheel={handleScroll}
                >
                    <ContentM custom={2} variants={textAnim}/>
                    <ContentM custom={3} variants={textAnim}/>
                    <ContentM custom={4} variants={textAnim}/>
                    <ContentM custom={5} variants={textAnim}/>
                </div>
            </section>
            <div className={style.carus_button}>
                <button onClick={handleCliclBackScroll}>back</button>
                <button onClick={handleCliclNextScroll}>next</button>
                <button
                type="button"
                className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Primary
                </button>
            </div>

        </motion.section>
    )
}
export default Carousel