import style from './BestT.module.css'
import icon from '../../assets/aboutAs/Icon(1).svg'
import TeamC from '../teamCard/TeamC'
import {motion} from 'framer-motion'
import { TeamM } from '../teamCard/TeamC'

const BestT = () => {

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

    return(
        <motion.section className={style.mainsinteam_a}
        initial="hidden"
        whileInView='visible'
        viewport={{amount: 0.5, once: true}} >
            <motion.div className={style.withoutCar} variants={container}>
                <img src={icon} alt="icon" width='80px' className={style.image_hghg}/>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#5956E8'}}>//</span><span style={{color: '#292930'}}>03 . OUR TEAM</span></p>
                    <p>The core values behind our work</p>
                </div>
            </motion.div>
            <div className={style.teamMar}>
                <TeamM variants={item} custom={1}/>
                <TeamM variants={item} custom={2}/>
                <TeamM variants={item} custom={3}/>
            </div>
        </motion.section>
    )
}

export default BestT