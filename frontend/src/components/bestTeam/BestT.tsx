import style from './BestT.module.css'
import {motion} from 'framer-motion'
import { TeamM } from '../teamCard/TeamC'
import { useState, useEffect } from 'react'
import { TeamProps } from '../../const/about'
import cls from '../carousel/Carousel.module.css'
import { useTranslation } from 'react-i18next'

const BestT = () => {
    const [teamReq, setTeamReq] = useState<TeamProps[]>([])
    const [translateValue, setTranslateValue] = useState<number>(40);
    const { i18n, t } = useTranslation()
    const currentLang = i18n.language;

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
      
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    };
    const handleClickBackScroll = () => {
        setTranslateValue(translateValue - 300);

        if (translateValue <= (teamReq.length-1) * -300) {
          setTranslateValue(translateValue + 300);
        }
    };
    const handleClickNextScroll = () => {

        setTranslateValue(translateValue + 300);

        if (translateValue >= 100) {
          setTranslateValue(translateValue - 300);
        }
    };
    useEffect(() => {
        try {
            const api = async () => {
                const data = await fetch("http://localhost:8002/content/employees/", {
                  method: "GET",
                  headers: {"Accept-Language": `${currentLang == 'kg' ? 'ky' : currentLang}`}
                })
                .then((response) => response.json())
                .catch((error) => console.log(error))

                setTeamReq(data)
              };
            api();
        } catch (error) {
            console.log(error)
        }
       
    },[currentLang])

    return(
        <motion.section className={style.mainsinteam_a}
        initial="hidden"
        whileInView='visible'
        viewport={{amount: 0.5, once: true}} >
            <motion.div className={style.withoutCar} variants={container}>
                <div className={style.image_hghg}>
                    <svg width="88" height="89" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon">
                    <circle id="Ellipse 15" cx="44" cy="44.9609" r="44" fill="#CA87FF"/>
                    <path id="Vector" d="M63.9069 49.1915L69.4948 46.4088C69.7107 46.3011 69.9029 46.1513 70.0601 45.9682C70.2173 45.7851 70.3363 45.5724 70.4101 45.3427C70.4838 45.1129 70.5109 44.8707 70.4897 44.6303C70.4685 44.3899 70.3995 44.1562 70.2866 43.9429L64.7213 33.2875C64.5041 32.8688 64.13 32.5529 63.6808 32.4088C63.2316 32.2647 62.7436 32.3041 62.3233 32.5183L56.6676 35.3462M63.9069 49.1915L56.6676 35.3462M63.9069 49.1915L60.2872 53.4446M56.6676 35.3462H47.46C47.225 35.3454 46.9922 35.3909 46.7748 35.4802C46.5574 35.5695 46.3597 35.7008 46.1931 35.8665L37.3249 44.7121C37.1439 44.898 37.0043 45.1202 36.9156 45.3641C36.8269 45.6079 36.7909 45.8679 36.8102 46.1267C36.8294 46.3855 36.9034 46.6372 37.0273 46.8652C37.1511 47.0933 37.322 47.2924 37.5285 47.4495L38.7502 48.377C40.0048 49.3134 41.5283 49.8193 43.0938 49.8193C44.6593 49.8193 46.1828 49.3134 47.4374 48.377L50.3331 46.2052L60.2872 53.4446M24.0905 48.9652L18.5026 46.16C18.2875 46.0545 18.0957 45.9069 17.9388 45.7259C17.7818 45.5448 17.6629 45.3341 17.589 45.1061C17.5151 44.8782 17.4879 44.6377 17.5088 44.399C17.5297 44.1604 17.5984 43.9283 17.7108 43.7167L23.2761 33.0613C23.4938 32.6428 23.8663 32.3259 24.3142 32.178C24.7621 32.0301 25.25 32.0629 25.6741 32.2695L31.3299 35.0974L24.0905 48.9652ZM24.0905 48.9652L36.4653 58.6252C36.6583 58.7822 36.8816 58.8978 37.1213 58.9646L50.2427 62.2449C50.5463 62.3105 50.8613 62.3015 51.1607 62.2188C51.4602 62.1361 51.7351 61.982 51.962 61.7698L60.2872 53.4446M31.4656 35.0974L43.0712 31.7039C43.4835 31.5857 43.9245 31.6177 44.3154 31.7944L52.143 35.3462" stroke="#722AAB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                </div>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#5956E8'}}>//</span><span style={{color: '#292930'}}>03 . {t('OUR TEAM')}</span></p>
                    <p>{t('The core values behind our work')}</p>
                </div>
            </motion.div>
            <div className={style.teamMar} style={{
                        transform: `translateX(${translateValue}px)`,
                    }}>
                {teamReq.map((team) => (
                    <div key={team.id}>
                        <TeamM team={team} variants={item} custom={1}/>
                    </div>
                ))}
            </div>
             <div className={cls.carus_button}>
                <button className={cls.button_hover} onClick={handleClickBackScroll}>
                    <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35.3477" r="35" transform="rotate(-180 35 35.3477)" fill="#454545"/>
                    <path d="M38 46.3477L28 35.3477L38 24.3477" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className={cls.button_hover} onClick={handleClickNextScroll}>
                    <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="47" cy="37.3477" r="35" fill="#454545"/> 
                    <path d="M44 26.3477L54 37.3477L44 48.3477" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </motion.section>
    )
}

export default BestT