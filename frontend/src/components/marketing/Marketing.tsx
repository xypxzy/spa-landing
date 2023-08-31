import icon from '../../assets/aboutAs/Icon.svg'
import pc from '../../assets/aboutAs/Image(2)(1)(2).png'
import goal from '../../assets/aboutAs/013. Goals.png'
import megaphone from '../../assets/aboutAs/017. Megaphone.png'
import style from './Marketind.module.css'

const Marketing = () => {
    return(
        <section className={style.marketing_a}>
        <img src={pc} alt="PC" className={style.ps}/>
        <div className={style.text_mar}>
            <div className={style.kd_jj}>
                <img src={icon} alt="icon" width='70px'/>
                <div className={style.top}>
                    <div className={style.jjddd}><span style={{color: 'yellow'}}>//<span style={{color: 'black'}}> 01 . About Us</span></span></div>
                    
                    <p>The #1 digital marketing services company</p>
                </div>
            </div>
            <div className={style.strategy}>
                <button><img src={goal} alt="goal" className={style.imaaage}/><p>Development Scale</p></button>
                <button><img src={megaphone} alt="megaphone" className={style.imaaage}/><p>Research & Strategy</p></button>
            </div>
            <p className={style.text_down}>Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam 
            Aliquam vestibulum libero morbi blandit cursus risus. Laoreet non curabitur gravida arcu ac tortor semper vivera nam libero justo laoreet mollis aliquam ut porttitor leo a diam.</p>
        </div>
    </section>
    )
}

export default Marketing