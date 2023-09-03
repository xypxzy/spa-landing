import style from './AboutUs.module.css'
import Ball from '../../components/ball/Ball'
import Marketing from '../../components/marketing/Marketing'
import Carousel from '../../components/carousel/Carousel'
import BestT from '../../components/bestTeam/BestT'
import {motion} from 'framer-motion'
import Address from '../../components/adresses/Adress'
import { useState, useEffect } from 'react'

interface summeryProps {
    number: number;
    data_description: string;
}


const AboutUs = () => {

    const numAnimatio ={ 
        hidden:{
            x: -500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }
    const [summery, setSummery] = useState<summeryProps[]>([])

    useEffect(() => {
        const api = async () => {
            const data = await fetch("http://localhost:8002/content/summary/", {
              method: "GET"
            })
            .then((response) => response.json());
            setSummery(data)
          };
        api();
    },[])

    return(
        <main>
            <section className={style.top_a}>
                <div className={style.img}>
                    <Ball/>
                    <div className={style.text_position}><p className={style.text_about}><span className={style.fg_bn}>About</span> <span className={style.fg_mn}>Us</span></p></div>
                    
                </div>
                <motion.div className={style.num}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                >
                    {summery.map((el) => (
                        <>
                            <motion.div className={style.num_lk} variants={numAnimatio}   initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                                <p>{el.number}<p>+</p></p>
                                <p>{el.data_description}</p>
                            </motion.div>
                        </>
                    ))}
                </motion.div>
            </section>
           <Marketing/>
           <Carousel/>
           <BestT/>
           <Address/>
        </main>
    )
}

export default AboutUs