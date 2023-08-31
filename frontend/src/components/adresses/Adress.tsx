import style from './Adress.module.css'
import icon from '../../assets/aboutAs/Icon(3).svg'
import AdressC from '../adressCard/AdressC'

const Adress = () => {
    return(
        <section className={style.adress}>
            <div className={style.withoutCar}>
                <img src={icon} alt="icon" width='70px' className={style.image_hghg}/>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#5956E8'}}>//</span><span style={{color: '#292930'}}>04 . OUR OFFICES</span></p>
                    <p>Come and visit us all around the world</p>
                </div>
            </div>
            <div className={style.adrrsssss}>
                <AdressC/>
                <AdressC/>
                <AdressC/>
            </div>
        </section>
    )
}

export default Adress