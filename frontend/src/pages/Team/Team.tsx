import style from './Team.module.css'
import Ball from '../../components/ball/Ball'
import cls from '../aboutUs/AboutUs.module.css'
import { TeamM } from '../../components/teamCard/TeamC'
import icon from '../../assets/aboutAs/IconOr.png'
import {motion} from 'framer-motion'

const Team = () => {

    const textAnim = {
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

    return(
        <section className={style.team_aa}>
             <div className={cls.img}>
                    <Ball/>
                    <div className={cls.text_position}><p className={cls.text_about}><span className={cls.fg_bn}>Team</span></p></div>  
            </div>
            <motion.div className={style.team_a}
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}>

                <div className={style.text_team}>
                    <img src={icon} alt="" />
                    <p className={style.na_ffff}><span style={{color: '#FEC90C'}}>//</span><span style={{color: '#D0D0D0'}}>03 . OUR TEAM</span></p>
                    <p className={style.text_trans}>High-impact services to take your business to the next level</p>
                </div>
                <div className={style.team_card}>
                    {[1,2,3,4,5,1,1,1,1].map(() => (
                        <>
                            <TeamM variants={textAnim}/>
                        </>
                    ))}
                </div>
                
            </motion.div>
        </section>
    )
}

export default Team