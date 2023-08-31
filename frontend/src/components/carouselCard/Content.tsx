import style from './Content.module.css'
import imageIc from '../../assets/aboutAs/Group 2484.png'

const Content = () => {
    return(
        <section className={style.block}>
             <img src={imageIc} alt="" width='153px'/>
             <p className={style.tx_car}>Efficiency</p>
             <p className={style.txnext_car}>Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
             <div className={style.line_car}>
                <svg width="84" height="4" viewBox="0 0 84 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00977 2H82.0098" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                </svg> 
             </div>
        </section>
    )
}

export default Content