import {ReactComponent as AboutUsImg} from '../../assets/AboutUs.svg'
import {ReactComponent as AboutUsBadge} from '../../assets/aboutUsBadge.svg'
import {ReactComponent as GuaranteedIcon} from '../../assets/guarantedIcon.svg'
import {ReactComponent as TeamIcon} from '../../assets/teamIcons.svg'

const AboutUsSection = () => {
  return (
      <section className="text-gray-600 h-screen">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <AboutUsImg />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 max-w-3xl md:ml-20 ml-0 flex gap-10 flex-col md:items-start md:text-left items-center text-center">
            <div className=' flex gap-5'>
              <AboutUsBadge className='w-16 h-16'/>
              <span>
                <p>// 02 . About Us</p>
                <h1 className='text-black text-4xl'>The #1 digital marketing services company</h1>
              </span>
            </div>
            <p className='md:ml-20 ml-0'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
              ftyuu Ipsum has been the industry's standard book. It has survived not only
              five centuries, but also the leap into electronic typesetting.
            </p>
            <div className='md:ml-20 ml-0 flex flex-col gap-5'>
              <span className='flex gap-4'>
                <GuaranteedIcon className='w-16 h-16'/>
                <span>
                  <h1 className='text-black text-2xl'>Guaranteed Results</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>
              </span>
              <span className='flex gap-4'>
                <TeamIcon className='w-22 h-22'/>
                <span>
                  <h1 className='text-black text-2xl'>Team of Industry Experts</h1>
                  <p>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUsSection