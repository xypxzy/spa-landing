import { useState } from 'react';
import cls from './SendEmailCard.module.css'
import bgCardImg from '../../assets/homePage/footer-card.png';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import axios from 'axios';
import { DEFAULT_URL } from '../../consts/const';

const SendEmailCard = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setName(newEmail);
  };

  const validateEmail = (inputEmail: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputEmail);
  };

  const handleSubmit = async () => {
      try {
        const postData = {
          name: name,
          email: email,
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
          <h1>Subscribe now</h1>
          <p className='text-sm text-[#D0D0D0]'>Industry's standard from dummy and make a type book.</p>
          <div className="mb-6">
            <input 
              type="text"
              placeholder='Enter your name'
              className={`${
                isValidEmail ? '' : 'border-red-500'
              } ${cls.footer__card_block__input}`}
              value={name}
              onChange={handleNameChange}
            />
            <input 
              type="text"
              placeholder='Enter your email'
              className={`${
                isValidEmail ? '' : 'border-red-500'
              } ${cls.footer__card_block__input}`}
              value={email}
              onChange={handleEmailChange}
            />
            <button 
                className={`${cls.footer__card_block__button} ${!isValidEmail ? 'bg-gray-500 hover:bg-gray-800 text-white' : 'bg-[#FFDC60] text-black'} hover:bg-[#FFDC20]`} 
                onClick={handleSubmit}
                disabled={!isValidEmail}
              >
                Submit
              </button>
            {!isValidEmail && (
              <p className="text-red-500 text-center">Invalid email</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendEmailCard