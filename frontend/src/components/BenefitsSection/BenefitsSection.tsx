import {ReactComponent as BenefitsIcon} from '../../assets/benefitsIcon.svg'
import {ReactComponent as BenefitsImg} from '../../assets/benefitsImg.svg'


const BenefitsSection = () => {
  return (
    <section className='h-screen'>
      <div className='container mx-auto flex px-5 md:flex-row flex-col  justify-center'>
        <div className='w-1/2 flex flex-col items-end'>
          <div className='flex gap-8'>
            <BenefitsIcon className='w-14 h-14' />
            <span className='flex flex-col gap-3'>
              <p className='text-[15px] text-[#292930] uppercase'>// 07 . Benefits</p>
              <h1 className='text-2xl w-[300px]'>Benefit of working with Maruncy</h1>
            </span>
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-5'>
          <div className='w-[500px]'>
            <h1 className='text-xl font-semibold border-b border-[#c2c1c1]'>Page Rankings</h1>
            <p className='text-[#555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='w-[500px]'>
            <h1 className='text-xl font-semibold border-b border-[#c2c1c1]'>Page Rankings</h1>
            <p className='text-[#555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='w-[500px]'>
            <h1 className='text-xl font-semibold border-b border-[#c2c1c1]'>Page Rankings</h1>
            <p className='text-[#555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default BenefitsSection