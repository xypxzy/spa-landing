import style from './CarouselC.module.css'
import imageIc from '../../assets/aboutAs/Group 2484.png'
import {motion} from 'framer-motion'
import { forwardRef, Ref } from 'react'
import { CarouselProps } from '../../const/about'

interface CarouselInt{
    carousel: CarouselProps;
}

const Content = forwardRef<HTMLDivElement, CarouselInt>(({carousel} ,ref: Ref<HTMLDivElement>) => {
    return(
        <section className={style.block} ref={ref}>
             <img src={carousel.image} alt="" width='153px'/>
             <p className={style.tx_car}>{carousel.name}</p>
             <p className={style.txnext_car}>{carousel.description}</p>
             <div className={style.line_car}>
                <svg width="84" height="4" viewBox="0 0 84 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00977 2H82.0098" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                </svg> 
             </div>
        </section>
    )
})

export default Content
export const ContentM = motion(Content) 