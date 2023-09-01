import style from './Adress.module.css'
import phone from '../../assets/aboutAs/Vector.svg'
import email from '../../assets/aboutAs/Icon(4).svg'
import flag from '../../assets/aboutAs/image 55.png'

const AdressC = () => {
    return(
        <section className={style.ad_card}>
            <img src={flag} alt="" className={style.imagesd} width='70px'/>
            <p className={style.md_fff}>San Francisco, USA</p>
            <p className={style.mf_ppp}> 1650 Page. San Francisco, California(CA), 94117</p>
            <div className={style.phone}>
                <img src={phone} alt="" width='15px'/>
                <p className={style.mf_ppp}>(414) 809 - 2567</p>
            </div>
            <div className={style.email}>
                <img src={email} alt="" width='15px'/>
                <p className={style.mf_ppp}>Contact@marketingagency.com</p>
            </div>
        </section>
    )
}
export default AdressC