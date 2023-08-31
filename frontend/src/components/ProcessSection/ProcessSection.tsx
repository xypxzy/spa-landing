import {ReactComponent as ProcessSectionIcon} from '../../assets/proccessSectionIcon.svg'
import {ReactComponent as ProcessSection1} from '../../assets/proccessSection1.svg'
import {ReactComponent as ProcessSection2} from '../../assets/proccessSection2.svg'
import {ReactComponent as ProcessSection3} from '../../assets/proccessSection3.svg'
import cls  from './ProcessSection.module.css'

const ProcessSection = () => {

  return (
    <section className={cls.process}>
      <div className={cls.process__container}>
        <div className={cls.process__wrapper}>

          <div className={cls.process__header}>
            <ProcessSectionIcon className='w-20 h-20'/>
            <span>
              <p className={cls.process__header_paragraph}>// 03 . Process</p>
              <h1 className={cls.process__header_title}>A simple, yet powerful and  efficient process</h1>
            </span>
          </div>

          <div className={cls.process__steps_card}>

            <div className={cls.process__card}>
              <ProcessSection3 className='w-[40%] h-[200px]'/>
              <div className={cls.process__card__step}>
                <div className={`${cls.process__card_step__line} border-transparent`}></div>
                <div className={cls.process__card_step_icon}>1</div>
                <div className={cls.process__card_step__line}></div>
              </div>
              <div className='w-[40%]'>
                <h2 className={cls.process__card_title}>Marketing Plan</h2>
                <p className={cls.process__card_description}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='w-[40%] text-right'>
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
              <ProcessSection2 className='w-[40%] h-[200px]'/>
            </div>

            <div className='flex justify-between  items-center'>
              <ProcessSection1 className='w-[40%] h-[200px]'/>
              <div className={cls.process__card__step}>
                <div className={cls.process__card_step__line}></div>
                <div className={cls.process__card_step_icon}>
                  3
                </div>
                <div className={`${cls.process__card_step__line} border-transparent`}></div>
              </div>
              <div className='w-[40%]'>
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