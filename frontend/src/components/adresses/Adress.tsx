import style from './Adress.module.css'
import icon from '../../assets/aboutAs/Icon(3).svg'
import AdressC from '../adressCard/AdressC'
import {motion} from 'framer-motion'

const Adress = () => {
    const numAnimatio ={ 
        hidden:{
            x: -700,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }
    return(
        <motion.section className={style.adress}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.5, once: true}}
        >
            <motion.div className={style.withoutCar} variants={numAnimatio} custom={1}>
                <img src={icon} alt="icon" width='80px' className={style.image_hghg}/>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#5956E8'}}>//</span><span style={{color: '#292930'}}>04 . OUR OFFICES</span></p>
                    <p>Come and visit us all around the world</p>
                </div>
            </motion.div>
            <motion.div className={style.adrrsssss} initial={{ scale: 0 }} custom={2}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}>
                <AdressC/>
                <AdressC/>
                <AdressC/>
            </motion.div>
        </motion.section>
    )
}

export default Adress