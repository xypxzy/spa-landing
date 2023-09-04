import style from './Adress.module.css'
import KGflag from '../../assets/aboutAs/Flag_of_Kyrgyzstan.svg(1).png'

const AdressC = () => {
    return(
        <section className={style.ad_card}>
            <img src={KGflag} alt="" className={style.imagesd} width='70px'/>
            <p className={style.md_fff}>San Francisco, USA</p>
            <p className={style.mf_ppp}> 1650 Page. San Francisco, California(CA), 94117</p>
            <div className={style.phone}>
                <div className={style.svg}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.28864 12.3339C8.27473 14.3702 9.92134 16.0126 11.9602 16.9935C12.1106 17.0647 12.277 17.0955 12.4429 17.0829C12.6088 17.0703 12.7686 17.0147 12.9065 16.9216L15.9011 14.9212C16.0334 14.8315 16.1863 14.7767 16.3455 14.7621C16.5047 14.7474 16.665 14.7733 16.8114 14.8374L22.4173 17.245C22.6089 17.3248 22.769 17.4653 22.8729 17.6449C22.9768 17.8246 23.0187 18.0334 22.9923 18.2392C22.8146 19.626 22.1377 20.9006 21.0883 21.8243C20.0388 22.7481 18.6887 23.2579 17.2906 23.2582C12.9701 23.2582 8.82648 21.5419 5.7714 18.4868C2.71632 15.4317 1 11.2881 1 6.9676C1.00032 5.56948 1.51006 4.21938 2.43384 3.16992C3.35763 2.12046 4.63215 1.44357 6.01894 1.26589C6.22477 1.23945 6.43359 1.28141 6.61324 1.3853C6.79288 1.48919 6.9334 1.64926 7.01314 1.84085L9.42079 7.45871C9.4834 7.60287 9.5096 7.76021 9.49706 7.91688C9.48453 8.07354 9.43366 8.22472 9.34892 8.35709L7.34854 11.3996C7.25948 11.5372 7.20721 11.6954 7.19672 11.8589C7.18624 12.0225 7.21788 12.1861 7.28864 12.3339V12.3339Z" stroke="#292930" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                </div>
                <p className={style.mf_ppp}>(414) 809 - 2567</p>
            </div>
            <div className={style.email}>
                <div className={style.svg}>
                    <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.74255H23M1 1.74255V17.3259C1 17.569 1.09658 17.8022 1.26849 17.9741C1.44039 18.146 1.67355 18.2426 1.91667 18.2426H22.0833C22.3264 18.2426 22.5596 18.146 22.7315 17.9741C22.9034 17.8022 23 17.569 23 17.3259V1.74255M1 1.74255L9.2971 9.34823C10.8264 10.7501 13.1736 10.7501 14.7029 9.34823L23 1.74255" stroke="#292930" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <p className={style.mf_ppp}>Contact@marketingagency.com</p>
            </div>
        </section>
    )
}
export default AdressC