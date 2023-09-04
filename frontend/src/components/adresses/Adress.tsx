import style from './Adress.module.css'
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
                <div className={style.image_hghg}>
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon">
                    <circle id="Ellipse 15" cx="44" cy="44" r="44" fill="#292930"/>
                    <g id="Icon_2">
                    <path id="Vector" d="M31.5749 62.6378H58.2009M49.3256 39.5619C49.3256 42.5029 46.9414 44.8871 44.0004 44.8871C41.0593 44.8871 38.6752 42.5029 38.6752 39.5619C38.6752 36.6209 41.0593 34.2367 44.0004 34.2367C46.9414 34.2367 49.3256 36.6209 49.3256 39.5619ZM58.201 39.6984C58.201 52.6019 44.0004 62.6378 44.0004 62.6378C44.0004 62.6378 29.7998 52.6019 29.7998 39.6984C29.7998 35.896 31.2959 32.2493 33.9591 29.5606C36.6222 26.8718 40.2342 25.3613 44.0004 25.3613C47.7666 25.3613 51.3786 26.8718 54.0417 29.5606C56.7048 32.2493 58.201 35.896 58.201 39.6984Z" stroke="#8A8A8A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    </svg>
                </div>
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