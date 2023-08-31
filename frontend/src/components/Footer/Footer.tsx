import { FunctionComponent, SVGProps } from 'react'
import {ReactComponent as LocationIcon}  from '../../assets/locationIcon.svg'
import {ReactComponent as PhoneIcon}  from '../../assets/phoneIcon.svg'
import {ReactComponent as PageIcon} from '../../assets/PagesIcon.svg'
import {ReactComponent as UtilityPageIcon} from '../../assets/utilityPages.svg'
import {ReactComponent as FollowIcon} from '../../assets/Follow.svg'
import {ReactComponent as CardBehind} from '../../assets/CardBehind.svg'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import cls from './Footer.module.css'

interface MenuPageProps {
  title: string,
  menus: string[],
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

function Footer() {
  const menuPages: MenuPageProps[] = [
    {title: 'Pages', menus: ['About','History','Careers'], icon: PageIcon},
    {title: 'Pages', menus: ['About','History','Careers'], icon: UtilityPageIcon},
    {title: 'Pages', menus: ['About','History','Careers'], icon: FollowIcon},
  ]

  return (
    <footer className={cls.footer}>
      <div className={cls.footer__container}>
        <div className={cls.footer__wrapper}>
          <div className={cls.footer__card_block}>
            <div className={cls.footer__card_block__wrapper}>
                <div className='flex items-center'>
                <Logo className='w-10 h-10'/>
                <span className={cls.footer__card_block__title}>
                  My Ticket
                </span>
                </div>
                <CardBehind className='md:w-[260px] md:h-[210px] w-[180px] h-[160px]'/>
                <div>
                  <h1>Subscribe now</h1>
                  <p className='text-sm text-[#D0D0D0]'>Industry's standard from dummy and make a type book.</p>
                  <div className="mb-6">
                    <input 
                      type="text"
                      placeholder='Enter you email'
                      className={cls.footer__card_block__input}
                    />
                    <button type="submit" className={cls.footer__card_block__button}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          <div className='md:w-1/2'>
            <div className={cls.footer__navigation_block}>
              <span className={cls.footer__navigation_contact}>
                <span className='flex items-center gap-1'>
                  <PhoneIcon className='w-5 h-5' />
                  <h2 className='font-semi text-lg'>Get in touch with</h2>  
                </span>
                <span className='my-5'>
                  <a href="#" className={cls.footer__navigation_phone}>+1 917 000 1212</a>
                </span>
                <p>nextlevel@marketing.com</p>
              </span>
              <span className='md:w-1/2 h-full flex flex-col gap-3'>
                <span className='flex items-center gap-1'>
                  <LocationIcon className='w-5 h-5'/>
                  <h2 className='font-semi text-lg'>Location</h2>
                </span>
                <p className='py-2'>10 Suna House 65 Rivington Street London EC2A 3QQ</p>
                <a href="#" className='text-yellow-400 hover:text-yellow-100 underline'>location</a>
              </span>
            </div>
            <div className={cls.footer__navigation_links}>
              {
                menuPages.map(item => (
                  <div>
                    <span className='flex items'>
                      <item.icon className='w-5 h-5 mr-2'/>
                      <p className="font-medium">
                        {item.title}
                      </p>
                    </span>
                    <nav className={cls.footer__navigation_item}>
                      {item.menus.map(menu => (
                        <a className="hover:opacity-75">{menu}</a>
                      ))}
                    </nav>
                  </div>
                ))
              }
            </div>
            <p className="mt-8 text-sm">
              Copyright © 2023 My Ticket
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
