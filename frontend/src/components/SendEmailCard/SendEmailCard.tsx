import { useState } from 'react';
import cls from './SendEmailCard.module.css'
import bgCardImg from '../../assets/homePage/footer-card.png';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import axios from 'axios';
import { DEFAULT_URL } from '../../consts/const';
import { useTranslation } from 'react-i18next';

const SendEmailCard = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
  const [errorValidate, setErrorValidate] = useState<boolean>(true);
  const { t } = useTranslation()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
    if(newEmail == '') {
      setIsValidEmail(true)
    }
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setName(newEmail);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    setIsValidPhone(validatePhone(newPhone));
    if(newPhone == '') {
      setIsValidPhone(true)
    }
  };

  const validatePhone = (inputPhone: string): boolean => {
    const phonePattern = /^\d{10}$/; // Пример формата номера: 1234567890 (10 цифр)
    return phonePattern.test(inputPhone);
  };

  const validateEmail = (inputEmail: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputEmail);
  };

  const handleSubmit = async () => {
      try {
        if(!(email || phone)) {
          setErrorValidate(false)
          return;
        } else {
          setErrorValidate(true)
        }
 
        const postData = {
          name: name,
          email: email,
          phone: phone,
        };
  
        const response = await axios.post(`${DEFAULT_URL}/content/subscribe/`, postData);
        console.log('Успешный ответ от сервера:', response.data);
      } catch (error) {
        console.error('Ошибка при отправке POST-запроса:', error);
      }
  };

  return (
    <div className={cls.footer__card_block}>
      <div className={cls.footer__card_block__wrapper}>
        <div className='flex items-center'>
        <Logo className='w-10 h-10'/>
        <span className={cls.footer__card_block__title}>
          My Ticket
        </span>
        </div>
        <img src={bgCardImg}  alt="bg img" />
        <div>
          <h1>{t('emailTitle')}</h1>
          <p className='text-sm text-[#D0D0D0]'>{t('emailDesc')}</p>
          <div className="mb-6">
            <input 
              type="text"
              placeholder={t('Enter your name')}
              className={`${
                (isValidEmail || isValidPhone)  ? '' : 'border-red-500'
              } ${cls.footer__card_block__input}`}
              value={name}
              onChange={handleNameChange}
            />
            <input 
              type="text"
              placeholder={t('Enter your email')}
              className={`${
                isValidEmail ? '' : 'border-red-500'
              } ${cls.footer__card_block__input}`}
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="text"
              placeholder={t('Enter your phone')}
              className={`${
                isValidPhone ? '' : 'border-red-500'
              } ${cls.footer__card_block__input}`}
              value={phone}
              onChange={handlePhoneChange}
            />
            <button 
                className={`${cls.footer__card_block__button} ${!(isValidPhone && isValidEmail) ? 'bg-gray-500 hover:bg-gray-800 text-white' : 'bg-[#FFDC60] text-black'} hover:bg-[#FFDC20]
                active:bg-opacity-50
                transition-all duration-300
              `} 
                onClick={handleSubmit}
                disabled={!(isValidPhone && isValidEmail)}
              >
                {t('Submit')}
              </button>
              {(!isValidEmail) && (
                <p className="text-red-500 text-center">{t('Invalid email')}</p>
              )}

              {(!isValidPhone) && (
                <p className="text-red-500 text-center">{t('Invalid phone')}</p>
              )}

{             (!errorValidate) && (
                <p className="text-red-500 text-center mt-5">{t('Phone or email field is required')}</p>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendEmailCard