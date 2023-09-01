import processSection1 from '../../assets/homePage/proccessSection1.png'
import processSection2 from '../../assets/homePage/proccessSection2.png'
import processSection3 from '../../assets/homePage/proccessSection3.png'
import processIcon from '../../assets/homePage/processIcon.png'

import cls  from './ProcessSection.module.css'

const ProcessSection = () => {

  return (
    <section className={cls.process}>
      <div className={cls.process__container}>
        <div className={cls.process__wrapper}>
          <div className={cls.process__header}>
            <img src={processIcon} alt="" className='xl:w-20 lg:h-20 h-14 w-14' />
            <span>
              <p className={cls.process__header_paragraph}>// 03 . Process</p>
              <h1 className={cls.process__header_title}>A simple, yet powerful and  efficient process</h1>
            </span>
          </div>

          <div className={cls.process__steps_card}>

            <div className={cls.process__card}>
              <img src={processSection1} alt="" className='xl:ml-24 ml-0 w-[250px] lg:w-[298px] md:h-[200px] hidden md:block' />

              <div className={cls.process__card__step}>
                <div className={`${cls.process__card_step__line} border-transparent`}></div>
                <div className={cls.process__card_step_icon}>1</div>
                <div className={cls.process__card_step__line}></div>
              </div>
              <div className='w-[40%] '>
                <h2 className={cls.process__card_title}>Marketing Plan</h2>
                <p className={cls.process__card_description}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='w-[40%] text-right lg:ml-0 ml-1'>
                <h2 className={cls.process__card_title}>Work Execution</h2>
                <p className={cls.process__card_description}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
              </div>
              <div className={cls.process__card__step}>
                <div className={cls.process__card_step__line}></div>
                <div className={cls.process__card_step_icon}>
                  2
                </div>
                <div className={cls.process__card_step__line}></div>
              </div>
              <img src={processSection2} alt="" className='xl:ml-20 ml-0 mr-0 lg:mr-14 h-[100px] md:h-[200px] hidden md:block' />
            </div>

            <div className='flex justify-between items-center'>
              <img src={processSection3} alt="" className='xl:ml-20 ml-0 mr-0 lg:mr-10 md:h-[200px] hidden md:block' />
              <div className={cls.process__card__step}>
                <div className={cls.process__card_step__line}></div>
                <div className={cls.process__card_step_icon}>
                  3
                </div>
                <div className={`${cls.process__card_step__line} border-transparent`}></div>
              </div>
              <div className='w-[40%] lg:ml-0 ml-6'>
                <h2 className={cls.process__card_title}>Growth & Scale</h2>
                <p className={cls.process__card_description}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default ProcessSection;