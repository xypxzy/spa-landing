import style from './AboutUs.module.css'
import Ball from '../../components/ball/Ball'
import Marketing from '../../components/marketing/Marketing'
import Carousel from '../../components/carousel/Carousel'
import BestT from '../../components/bestTeam/BestT'
import Adress from '../../components/adresses/Adress'


const AboutUs = () => {

    const number = [
        {skale: '325', text: 'Clients Worldwide', color: 'red', plus:'+'},
        {skale: '325', text: 'Clients Worldwide',  color: 'blue', plus:'+'},
        {skale: '325', text: 'Clients Worldwide',  color: 'red', plus:'+'},
        {skale: '325', text: 'Clients Worldwide',  color: 'blue', plus:'+'}, 

    ]
    return(
        <main>
            <section className={style.top_a}>
                <div className={style.img}>
                    Header
                    <Ball/>
                    <p className={style.text_about}><span className={style.fg_bn}>About</span> <span className={style.fg_mn}>Us</span></p>
                </div>
                <div className={style.num}>
                    {number.map((el) => (
                        <>
                            <div className={style.num_lk}>
                                <p>{el.skale} <p style={{color:`${el.color}`}}>{el.plus}</p></p>
                                <p>{el.text}</p>
                            </div>
                        </>
                    ))}
                </div>
            </section>
           <Marketing/>
           <Carousel/>
           <BestT/>
           <Adress/>
        </main>
    )
}

export default AboutUs