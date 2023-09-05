import style from './CarouselC.module.css'
import imageIc from '../../assets/aboutAs/Group 2484.png'
import {motion} from 'framer-motion'
import { forwardRef, Ref } from 'react'
import { ValuesProps } from '../../pages/aboutUs/AboutUs'

interface CarouselInt{
    carousel: ValuesProps;
    index: number
}

const Content = forwardRef<HTMLDivElement, CarouselInt>(({carousel, index} ,ref: Ref<HTMLDivElement>) => {
    return(
        <section className={`${style.block} md:w-[380px] 2xl:w-[500px] w-[260px] h-auto`}ref={ref}>
             <img src={carousel.image} alt="" width='153px'/>
             <p className={style.tx_car}>{carousel.name}</p>
             <p className={style.txnext_car}>{carousel.description}</p>
             <div className={style.line_car}>
                <svg width="84" height="4" viewBox="0 0 84 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00977 2H82.0098" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg> 
             </div>
        </section>
    )
})

export default Content
export const ContentM = motion(Content) 