import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import cls from './Header.module.css';
import { FC, useEffect, useState } from 'react';


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

  const bgColor = scrollY > 0 ? 'bg-white' : 'bg-none';

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
    {title: 'About', path: '/'},
    {title: 'Team', path: '/'},
    {title: 'Services', path: '/services'},
    {title: 'Contact', path: '/'},
  ]

  const navLinkMobile: LinkProps[] = [
    {title: 'Home', path: '/', onClick: closeModal},
    {title: 'About', path: '/', onClick: closeModal },
    {title: 'Team', path: '/', onClick: closeModal},
    {title: 'Services', path: '/services', onClick: closeModal},
    {title: 'Contact', path: '/', onClick: closeModal},
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
          <Link
            to={"/"}
            className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          >
            Home
          </Link>
          <Link
            to={"aboutUs"}
            className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          >
            About
          </Link>
          <Link
            to={"/"}
            className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          >
            Team
          </Link>
          <Link
            to={"/services"}
            className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          >
            Services
          </Link>
          <Link
            to={"/"}
            className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          >
            Contact
          </Link>
          {renderNavMenu({links: navLink})}
        </nav>
        {
          isModalOpen ? (
            <div className="fixed inset-0 flex items-center justify-center z-10 overflow-hidden">
              <div className="bg-white  rounded shadow-md w-screen h-screen overflow-y-hidden">
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
            <button type="button" 
              className={cls.header__modal_button}         
              onClick={openModal}
              aria-controls="mega-menu-full" 
              aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path  d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
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
