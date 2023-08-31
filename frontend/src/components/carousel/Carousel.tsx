import style from './Carousel.module.css'
import icon from '../../assets/aboutAs/IconOr.png'
import Content from '../carouselCard/Content'
import { useState } from 'react'

const Carousel = () => {
    const [translateValue, setTranslateValue] = useState<number>(0);
    console.log(translateValue)
  

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
        <section className={style.carousel_a}>
            <div className={style.withoutCar}>
                <img src={icon} alt="icon" width='70px' className={style.image_hghg}/>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#FEC90C'}}>//</span><span style={{color: '#D0D0D0'}}>02 . OUR VALUES</span></p>
                    <p>The core values behind our work</p>
                </div>
            </div>

            <section className={style.carousel} >
                <div className={style.rotation}  
                    style={{
                        transform: `translateX(${translateValue}px)`,
                    }}
                    onWheel={handleScroll}
                >
                    <Content/>
                    <Content/>
                    <Content/>
                    <Content/>
                    <Content/>
                    <Content/>
                   
                </div>
            </section>
            <div className={style.carus_button}>
                <button onClick={handleCliclBackScroll}>back</button>
                <button onClick={handleCliclNextScroll}>next</button>
            </div>

        </section>
    )
}
export default Carousel