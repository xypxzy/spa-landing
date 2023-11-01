import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PhoneIcon } from '../../assets/phoneIcon.svg';
import { DEFAULT_URL } from '../../consts/const';
import SendEmailCard from '../SendEmailCard/SendEmailCard';
import cls from './Footer.module.css';

interface AddressProps {
  id: number;
  address: string;
}
interface PhoneProps {
  id: number;
  phone: string;
}
interface EmailProps {
  id: number;
  email: string;
}

function Footer() {
  const [address, setAddress] = useState<AddressProps[]>([]);
  const [phone, setPhone] = useState<PhoneProps[]>([]);
  const [emails, setEmails] = useState<EmailProps[]>([]);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get<AddressProps[]>(
          `${DEFAULT_URL}/content/addresses/`,
          {
            headers: {
              'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`
            }
          }
        );
        setAddress(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    const fetchPhone = async () => {
      try {
        const response = await axios.get<PhoneProps[]>(
          `${DEFAULT_URL}/content/phones/`,
          {
            headers: {
              'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`
            }
          }
        );
        setPhone(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    const fetchEmails = async () => {
      try {
        const response = await axios.get<EmailProps[]>(
          `${DEFAULT_URL}/content/emails/`,
          {
            headers: {
              'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`
            }
          }
        );
        setEmails(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };
    fetchAddress();
    fetchPhone();
    fetchEmails();
  }, [currentLang]);

  return (
    <footer className={cls.footer}>
      <div className={cls.footer__container}>
        <div className={cls.footer__wrapper}>
          <SendEmailCard />
          <div className="md:w-1/2 md:h-[620px] h-full">
            <div className={cls.footer__navigation_block}>
              <span className={cls.footer__navigation_contact}>
                <span className="flex items-center gap-1">
                  <PhoneIcon className="w-5 h-5" />
                  <h2 className="font-semi text-lg">
                    {t('Get in touch with')}
                  </h2>
                </span>
                <span className="my-5 w-full flex flex-wrap gap-5">
                  {phone.length > 0 &&
                    phone.map((item) => (
                      <a
                        href={`tel:${phone[0].phone.replace(/ /g, '')}`}
                        target="_blank"
                        className={cls.footer__navigation_phone}
                      >
                        {item.phone}
                      </a>
                    ))}
                </span>
                {emails.length > 0 && (
                  <a href={`mailto:${emails[0].email}`}>{emails[0].email}</a>
                )}
              </span>
              {/* <span className="lg:w-full h-full flex flex-col gap-3">
                <span className="flex items-center gap-1">
                  <LocationIcon className="w-5 h-5" />
                  <h2 className="font-semi text-lg">{t('Location')}</h2>
                </span>
                <span className=" flex flex-wrap gap-3">
                  {address.length > 0 &&
                    address.map((item) => (
                      <div className="w-[250px]">
                        <p className="py-2">{item.address}</p>
                        <a
                          href={`https://www.google.com/maps?q=${item.address}`}
                          className="text-yellow-400 hover:text-yellow-100 underline"
                          target="_blank"
                        >
                          {t('Location').toLowerCase()}
                        </a>
                      </div>
                    ))}
                </span>
              </span> */}
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm flex justify-center">
          {t('Copyright © 2023 MyTicket')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
