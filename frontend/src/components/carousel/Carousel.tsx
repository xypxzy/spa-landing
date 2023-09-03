import style from './Carousel.module.css'
import icon from '../../assets/aboutAs/IconOr.png'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import { ContentM } from '../carouselCard/CarouselC'
import { CarouselProps } from '../../const/about'

const Carousel = () => {
    const [translateValue, setTranslateValue] = useState<number>(0);
    const [carouselReq, setCarouselReq] = useState<CarouselProps[]>([])
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
        if (translateValue <= carouselReq.length * -360) {
            const newTranslateValue = translateValue + 20
            setTranslateValue(newTranslateValue);
        }
        if (translateValue >= 100) {
            const newTranslateValueBack = translateValue - 20
            setTranslateValue(newTranslateValueBack);
        }
    };
    const handleCliclNextScroll = () => {
        setTranslateValue(translateValue - 400);

        if (translateValue <= carouselReq.length * -360) {
          setTranslateValue(translateValue + 400);
        }
    };
    const handleCliclBackScroll = () => {

        setTranslateValue(translateValue + 400);

        if (translateValue >= 100) {
          setTranslateValue(translateValue - 400);
        }
    };

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost:8002/content/values/", {
              method: "GET"
            })
            .then((response) => response.json());
            setCarouselReq(data)
          };
        api();
    },[])


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
                    {carouselReq.map((car) => (
                        <>
                            <ContentM carousel={car} custom={2} variants={textAnim}/>
                        </>
                    ))}
                </div>
            </section>
            <div className={style.carus_button}>
                <button className={style.button_hover} onClick={handleCliclBackScroll}>
                    <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35.3477" r="35" transform="rotate(-180 35 35.3477)" fill="#454545"/>
                    <path d="M38 46.3477L28 35.3477L38 24.3477" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className={style.button_hover} onClick={handleCliclNextScroll}>
                    <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="47" cy="37.3477" r="35" fill="#454545"/> 
                    <path d="M44 26.3477L54 37.3477L44 48.3477" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>

        </motion.section>
    )
}
export default Carousel