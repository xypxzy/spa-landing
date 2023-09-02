import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import cls from './Header.module.css';

interface LinkProps {
  title: string,
  path: string,
  onClick?: () => void;
}


function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // При скролле навешивается bg-color для хедера
  const handleScroll = () => setScrollY(window.scrollY);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = scrollY > 0 ? 'bg-white transition-color duration-100 ease-in-out' : 'bg-none';

  // Для открытие и закрытие модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Рендер навигационной меню
  const navLink: LinkProps[] = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/aboutUs'},
    {title: 'Team', path: '/'},
    {title: 'Services', path: '/services'},
  ]

  const navLinkMobile: LinkProps[] = [
    {title: 'Home', path: '/', onClick: closeModal},
    {title: 'About', path: '/aboutUs', onClick: closeModal },
    {title: 'Team', path: '/', onClick: closeModal},
    {title: 'Services', path: '/services', onClick: closeModal},
  ]

  const renderNavMenu: FC<{links: LinkProps[]}> = ({links}) => (
    <>
      {links.map(link => (
        <Link
          key={link.title}
          to={link.path}
          className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          onClick={link.onClick && link.onClick}
        >
          {link.title}
        </Link>
      ))}
    </>
  )

  // Рендер кнопок для смены языка
  const renderLangButton = () => (
    <>
      <button className={cls.header__lang}>
        RU
      </button>
      <button className={cls.header__lang}>
        EN
      </button>
    </>
  )

  return (
    <header className={cls.header}>
      <div className={`${cls.header__wrapper} ${bgColor}`}>
        <Link 
          to={'/'}
          className={cls.header__logo}
        >
          <Logo className='w-14 h-14'/>
          <span
           className={cls.header__logo_title}
           >
            My Ticket
          </span>
        </Link>
        <nav className={cls.header__nav}>
          {renderNavMenu({links: navLink})}
        </nav>
        {
          isModalOpen ? (
            <div className="fixed inset-0 flex items-center justify-center z-10 overflow-hidden">
              <div className="bg-white rounded shadow-md w-screen h-screen overflow-y-hidden">
                <span
                  className="absolute top-4 right-9 m-4 cursor-pointer text-3xl"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <nav className='flex flex-col h-screen justify-center items-center text-xl gap-6' >
                  {renderNavMenu({links: navLinkMobile})}
                </nav>
                <div>
                  {renderLangButton()}
                </div>
              </div>
            </div>
          ) : (
              <button
                className={`relative group ${cls.header__modal_button}`}
                onClick={openModal}
              >             
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-transparent hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                  <div className="bg-black h-[2px] w-5 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                  <div className="bg-black h-[2px] w-5 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                  <div className="bg-black h-[2px] w-5 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                </div>
              </div>
            </button>
          )
        }
        <div className='hidden lg:block'>
          {renderLangButton()}
        </div>
      </div>
    </header>
  );
}

export default Header;
