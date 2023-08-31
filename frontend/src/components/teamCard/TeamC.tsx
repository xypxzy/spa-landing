import style from './TeamC.module.css'
import photo from '../../assets/aboutAs/Photo(1).png'
import inst from '../../assets/aboutAs/Instagram.svg'

const TeamC = () => {
 return(
    <section className={style.card}>
        <img src={photo} alt="" className={style.photo}/>
        <div className={style.team_text}>
            <div className={style.lone}>
                <svg width="84" height="4" viewBox="0 0 84 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.96094H82" stroke="#5956E8" stroke-width="2.5" stroke-linecap="round"/>
                </svg> 
            </div>
            <p className={style.text_name}>Pipp Clarkson</p>
            <p className={style.hhggg}>Lead Manager</p>
            <div className={style.nerwork}>
                <a href=""><img src={inst} alt="" /></a>
            </div>
        </div>
    </section>
 )
}

export default TeamC