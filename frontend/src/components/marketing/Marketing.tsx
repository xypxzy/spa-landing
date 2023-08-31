import icon from '../../assets/aboutAs/Icon.svg'
import pc from '../../assets/aboutAs/Image(2)(1)(2).png'
import goal from '../../assets/aboutAs/013. Goals.png'
import megaphone from '../../assets/aboutAs/017. Megaphone.png'
import style from './Marketind.module.css'
import {motion} from 'framer-motion'

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
    return(
    <motion.section 
        className={style.marketing_a}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.5, once: true}}>
        <motion.img src={pc} alt="PC" className={style.ps} custom={1} variants={imgAnimatio} width='600px'/>
        <motion.div className={style.text_mar} custom={2} variants={numAnimatio}>
            <div className={style.kd_jj}>
                <img src={icon} alt="icon" width='80px'/>
                <div className={style.top}>
                    <div className={style.jjddd}><span style={{color: 'yellow'}}>//<span style={{color: 'black'}}> 01 . About Us</span></span></div>
                    
                    <p>The #1 digital marketing services company</p>
                </div>
            </div>
            <div className={style.strategy}>
                <button><img src={goal} alt="goal" className={style.imaaage} width='30px'/><p>Development Scale</p></button>
                <button><img src={megaphone} alt="megaphone" className={style.imaaage} width='30px'/><p>Research & Strategy</p></button>
            </div>
            <p className={style.text_down}>Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam 
            Aliquam vestibulum libero morbi blandit cursus risus. Laoreet non curabitur gravida arcu ac tortor semper vivera nam libero justo laoreet mollis aliquam ut porttitor leo a diam.</p>
        </motion.div>
    </motion.section>
    )
}

export default Marketing