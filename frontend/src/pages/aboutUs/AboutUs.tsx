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
import axios from 'axios'
import { TeamProps } from '../../const/about'

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

export interface ValuesProps {
    id: number,
    name: string,
    description: string,
    image: string
  }

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

const AboutUs = () => {
  const [values, setValues] = useState<ValuesProps[]>([]);
  const [summary, setSummary] = useState<summaryProps[]>([]);
  const [teams, setTeams] = useState<TeamProps[]>([])
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

        const fetchValues = async () => {
            try {
            const response = await axios.get<ValuesProps[]>(`${DEFAULT_URL}/content/values/`, {
                headers: {
                'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`,
                },
            }); 
            setValues(response.data);
            } catch (error) {
            console.error('Ошибка при запросе данных:', error);
            }
        };
        const fetchTeam = async () => {
            try {
                const api = async () => {
                    const data = await fetch(`${DEFAULT_URL}/content/employees/`, {
                      method: "GET",
                      headers: {"Accept-Language": `${currentLang == 'kg' ? 'ky' : currentLang}`}
                    })
                    .then((response) => response.json())
                    .catch((error) => console.log(error))
    
                    setTeams(data)
                  };
                api();
            } catch (error) {
                console.log(error)
            }
           
        }
        fetchValues();
        fetchTeam();
       
    },[currentLang])


    return(
        <main>
            <section className={style.top}>
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
           <div className='flex flex-col items-center justify-center'>
                <div className={style.withoutCar}>
                        <div className={style.image_hghg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                            <circle cx="44" cy="44" r="44" fill="#F96A4B"/>
                            <path d="M51.5976 39.8549L41.4617 49.5246L36.4024 44.6897M31.3085 56.6905C29.7199 55.1019 30.7732 51.7693 29.9617 49.8181C29.1501 47.8669 26.042 46.1574 26.042 43.999C26.042 41.8406 29.1156 40.2002 29.9617 38.1799C30.8078 36.1597 29.7199 32.8961 31.3085 31.3075C32.8971 29.719 36.2297 30.7723 38.1809 29.9607C40.1321 29.1491 41.8416 26.041 44 26.041C46.1584 26.041 47.7988 29.1146 49.8191 29.9607C51.8394 30.8068 55.1029 29.719 56.6915 31.3075C58.2801 32.8961 57.2268 36.2287 58.0383 38.1799C58.8499 40.1311 61.958 41.8406 61.958 43.999C61.958 46.1574 58.8844 47.7978 58.0383 49.8181C57.1922 51.8384 58.2801 55.1019 56.6915 56.6905C55.1029 58.2791 51.7703 57.2258 49.8191 58.0374C47.8679 58.8489 46.1584 61.957 44 61.957C41.8416 61.957 40.2012 58.8835 38.1809 58.0374C36.1606 57.1913 32.8971 58.2791 31.3085 56.6905Z" stroke="#A72D13" />
                        </svg>
                        </div>
                        <div className={style.under_text}>
                            <p className={style.na_ffff}><span style={{color: '#5956E8'}}>//</span><span style={{color: '#fff'}}>02 . {t('OUR VALUES')}</span></p>
                            <p className='text-white text-xl xl:text-4xl lg:text-3xl md:text-2xl'>{t('The core values behind our work')}</p>
                        </div>
                    </div>
                <Carousel values={values} isTeam={false}/>
           </div>
           <BestT teams={teams}/>
        </main>
    )
}

export default AboutUs