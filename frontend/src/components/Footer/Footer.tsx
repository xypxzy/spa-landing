import { FunctionComponent, HTMLAttributes, SVGProps, useEffect, useState } from 'react'
import {ReactComponent as LocationIcon}  from '../../assets/locationIcon.svg'
import {ReactComponent as PhoneIcon}  from '../../assets/phoneIcon.svg'
import {ReactComponent as PageIcon} from '../../assets/PagesIcon.svg'
import {ReactComponent as UtilityPageIcon} from '../../assets/utilityPages.svg'
import {ReactComponent as FollowIcon} from '../../assets/Follow.svg'

import cls from './Footer.module.css'
import axios from 'axios'
import { DEFAULT_URL } from '../../consts/const'
import SendEmailCard from '../SendEmailCard/SendEmailCard'

interface MenuPageProps {
  title: string,
  menus: string[],
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

interface AddressProps {
  id: number,
  address: string
}
interface PhoneProps {
  id: number,
  phone: string
}
interface EmailProps {
  id: number,
  email: string
}


function Footer() {
  const [address, setAddress] = useState<AddressProps[]>([]);
  const [phone, setPhone] = useState<PhoneProps[]>([]);
  const [emails, setEmails] = useState<EmailProps[]>([]);

  useEffect(() => {
    // Создайте функцию для выполнения запроса к серверу
    const fetchAddress = async () => {
      try {
        const response = await axios.get<AddressProps[]>(`${DEFAULT_URL}/content/addresses/`); 
        setAddress(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    const fetchPhone = async () => {
      try {
        const response = await axios.get<PhoneProps[]>(`${DEFAULT_URL}/content/phones/`);
        setPhone(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    const fetchEmails = async () => {
      try {
        const response = await axios.get<EmailProps[]>(`${DEFAULT_URL}/content/emails/`);
        setEmails(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };
    fetchAddress();
    fetchPhone();
    fetchEmails();
  }, []);

  return (
    <footer className={cls.footer}>
      <div className={cls.footer__container}>
        <div className={cls.footer__wrapper}>
          <SendEmailCard />
          <div className='md:w-1/2'>
            <div className={cls.footer__navigation_block}>
              <span className={cls.footer__navigation_contact}>
                <span className='flex items-center gap-1'>
                  <PhoneIcon className='w-5 h-5' />
                  <h2 className='font-semi text-lg'>Get in touch with</h2>  
                </span>
                <span className='my-5'>
                  {phone.length > 0 && 
                    <a 
                      href={`tel:${phone[0].phone.replace(/ /g, '')}`}                   
                      target='_blank'
                      className={cls.footer__navigation_phone}
                    >
                      {phone[0].phone}
                    </a>
                  }
                </span>
                {
                  emails.length > 0 && (
                    <a href={`mailto:${emails[0].email}`}>{emails[0].email}</a>
                  )
                }
              </span>
              <span className='lg:w-1/2 h-full flex flex-col gap-3'>
                <span className='flex items-center gap-1'>
                  <LocationIcon className='w-5 h-5'/>
                  <h2 className='font-semi text-lg'>Location</h2>
                </span>
                <p className='py-2'>{address.length > 0 ? address[0].address : null}</p>
                <a 
                  href={`https://www.google.com/maps?q=${address.length > 0 && address[0].address}`}
                  className='text-yellow-400 hover:text-yellow-100 underline'
                  target='_blank'
                >
                  location
                </a>
              </span>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm flex justify-center">
              Copyright © 2023 My Ticket
        </p>
      </div>
    </footer>
  )
}

export default Footer
