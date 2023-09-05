import style from './Ball.module.css'
import baller from '../../assets/aboutAs/Group 2482(2)-modified(1).png'
import { useEffect, useState } from 'react'

const Ball = () => {

    const [rotateValue, setRotateValue] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setRotateValue(rotateValue + 5)
        }, 100)
        return () => {
            clearInterval(interval); // Clear interval when component unmounts
        };
    })

    return(
        <section className={style.ball}>
            <img className={`${style.rotate} md:w-full md:h-full w-72 h-72`} src={baller} alt="ball" style={{transform: `rotate(${rotateValue}deg)`,}}/>
        </section>
    )
}

export default Ball