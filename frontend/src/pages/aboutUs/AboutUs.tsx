import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import Ball from '../../components/ball/Ball'
import BestT from '../../components/bestTeam/BestT'
import Carousel from '../../components/carousel/Carousel'
import { DEFAULT_URL } from '../../consts/const'
import { TagsProps } from '../HomePage/Home'
import style from './AboutUs.module.css'

interface summaryProps {
    number: number;
    data_description: string;
}

export interface DataProps {
    id: number,
    pre_title: string,
    pre_title_image: string,
    title: string,
    description: string,
    tags: TagsProps[],
    image: string
  }


const AboutUs = () => {

    const numAnimation ={ 
        hidden:{
            x: -500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    }
    const [summary, setSummary] = useState<summaryProps[]>([])
    const [data, setData] = useState<DataProps[]>([])
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const currentLang = i18n.language;
    
    
    useEffect(() => {
        try {
            const api = async () => {
                const data = await fetch(`${DEFAULT_URL}/content/summary/`, {
                  method: "GET",
                  headers: {"Accept-Language": `${currentLang == 'kg' ? 'ky' : currentLang}`}
                })
                .then((response) => response.json())
                .catch((error) => console.log(error))
                setSummary(data)
              };
            api();
        } catch (error) {
            console.log(error)
        }
       
    },[currentLang])

    useEffect(() => {
        try {
            const api = async () => {
                const data = await fetch(`${DEFAULT_URL}/content/content/`, {
                  method: "GET",
                  headers: {"Accept-Language": `${currentLang == 'kg' ? 'ky' : currentLang}`}
                })
                .then((response) => response.json())
                .catch((error) => console.log(error))
                setData(data)
              };
            api();
        } catch (error) {
            console.log(error)
        }
       
    },[currentLang])


    return(
        <main>
            <section className={style.top_a}>
                <div className={style.img}>
                    <Ball/>
                    <div className={style.text_position}><p className={style.text_about}><span className={style.fg_bn}>{t('About us')}</span></p></div>
                    
                </div>
                <motion.div className={style.num}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5, once: true}}
                >
                    {summary.map((el, i) => (
                        <div key={i}>
                            <motion.div className={style.num_lk} variants={numAnimation}   initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <p>{el.number}<p>+</p></p>
                                <p>{el.data_description}</p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </section>
           <AboutUsSection data={data[0]}/>
           <Carousel/>
           <BestT/>
        </main>
    )
}

export default AboutUs