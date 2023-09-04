import goal from '../../assets/aboutAs/013. Goals.png'
import megaphone from '../../assets/aboutAs/017. Megaphone.png'
import style from './Marketind.module.css'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import pc from '../../assets/aboutAs/Image(2)(1)(2).png'

interface AboutProps{
    image: string;
    title: string;
    description: string;
    tags: string
}



const Marketing: React.FC = () => {
    const numAnimatio ={ 
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
    const imgAnimatio ={ 
        hidden:{
            x: 500,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }

    const [aboutSet, setAboutSet] = useState<AboutProps>()

    useEffect(() => {
        try {
            const api = async () => {
                const data = await fetch("http://localhost:8002/content/content/", {
                  method: "GET"
                })
                .then((response) => response.json());
                setAboutSet(data[0])
              };
            api();
        } catch (error) {
            console.log(error)
        }
        
    },[])

    return(
    <motion.section 
        className={style.marketing_a}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.5, once: true}}>
        <motion.img src={pc} alt="PC" className={style.ps} custom={1} variants={imgAnimatio} width='600px'/>
        <motion.div className={style.text_mar} custom={2} variants={numAnimatio}>
            <div className={style.kd_jj}>
                <div>
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon">
                    <circle id="Ellipse 15" cx="44" cy="44" r="44" fill="#FFDC60"/>
                    <path id="Vector" d="M44 51C47.866 51 51 47.866 51 44C51 40.134 47.866 37 44 37C40.134 37 37 40.134 37 44C37 47.866 40.134 51 44 51Z" stroke="#866C12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M53.9563 58.9958C50.6152 61.214 46.629 62.253 42.6302 61.9478C38.6315 61.6426 34.8491 60.0107 31.8834 57.3112C28.9176 54.6116 26.9384 50.9989 26.2597 47.0463C25.581 43.0937 26.2417 39.0277 28.1369 35.4934C30.0322 31.9591 33.0535 29.159 36.7214 27.5373C40.3893 25.9156 44.4937 25.5653 48.3834 26.5419C52.2731 27.5185 55.7252 29.7661 58.192 32.9281C60.6588 36.0901 61.9991 39.9854 62 43.9958C62 48.1395 60.5 51.4958 56.75 51.4958C53 51.4958 51.5 48.1395 51.5 43.9958V36.4958" stroke="#866C12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                </div>
                <div className={style.top}>
                    <div className={style.jjddd}><span style={{color: 'yellow'}}>//<span style={{color: 'black'}}> 01 . {aboutSet?.title}</span></span></div>
                    
                    <p>{aboutSet?.tags}</p>
                </div>
            </div>
            {/* <div className={style.strategy}>
                <button><img src={goal} alt="goal" className={style.imaaage} width='30px'/><p>Development Scale</p></button>
                <button><img src={megaphone} alt="megaphone" className={style.imaaage} width='30px'/><p>Research & Strategy</p></button>
            </div> */}
            <p className={style.text_down}>{aboutSet?.description}</p>
        </motion.div>
    </motion.section>
    )
}

export default Marketing