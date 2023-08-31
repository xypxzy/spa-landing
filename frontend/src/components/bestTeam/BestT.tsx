import style from './BestT.module.css'
import icon from '../../assets/aboutAs/Icon(1).svg'
import TeamC from '../teamCard/TeamC'

const BestT = () => {

    return(
        <section className={style.mainsinteam_a}>
            <div className={style.withoutCar}>
                <img src={icon} alt="icon" width='70px' className={style.image_hghg}/>
                <div className={style.under_text}>
                    <p className={style.na_ffff}><span style={{color: '#5956E8'}}>//</span><span style={{color: '#292930'}}>03 . OUR TEAM</span></p>
                    <p>The core values behind our work</p>
                </div>
            </div>
            <div className={style.teamMar}>
                <TeamC/>
                <TeamC/>
                <TeamC/>
            </div>
        </section>
    )
}

export default BestT