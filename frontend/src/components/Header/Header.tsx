import { FC, useEffect, useState, useTransition } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import cls from './Header.module.css';
import LanguagesSwitcher from '../LanguagesSwitcher/LanguagesSwitcher';
import { useTranslation } from 'react-i18next';

interface LinkProps {
  title: string;
  path: string;
  onClick?: () => void;
}


function Header() {
  const { t } = useTranslation()

  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  // При скролле навешивается bg-color для хедера
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor =
    scrollY > 0
      ? 'bg-white transition-color duration-100 ease-in-out'
      : 'bg-none';

  // Для открытие и закрытие модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Рендер навигационной меню

  const navLink: LinkProps[] = [
    {title: t("Home"), path: '/'},
    {title: t('About'), path: '/aboutUs'},
    {title: t('Services'), path: '/services'},
  ]

  const navLinkMobile: LinkProps[] = [
    {title: t('Home'), path: '/', onClick: closeModal},
    {title: t('About'), path: '/aboutUs', onClick: closeModal },
    {title: t('Services'), path: '/services', onClick: closeModal},
  ]


  const renderNavMenu: FC<{ links: LinkProps[] }> = ({ links }) => (
    <>
      {links.map((link, id) => (
        <Link
          key={id}
          to={link.path}
          className={`${cls.header__nav_item} ${cls['link-underline']} ${cls['link-underline-black']}`}
          onClick={link.onClick && link.onClick}
        >
          {link.title}
        </Link>
      ))}
    </>
  );

  return (
    <header className={cls.header}>
      <div className={`${cls.header__wrapper} ${bgColor}`}>
        <Link to={'/'} className={cls.header__logo}>
          <Logo className="w-14 h-14" />
          <span className={cls.header__logo_title}>{'My Ticket'}</span>
        </Link>
        <nav className={cls.header__nav}>
          {navLink.map((link, id) => (
            <Link
              key={id}
              to={link.path}
              className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        {isModalOpen ? (
          <div className="fixed inset-0 flex items-center justify-center z-10 overflow-hidden">
            <div className="bg-white rounded shadow-md w-screen h-screen overflow-y-hidden">
              <span
                className="absolute top-4 right-9 m-4 cursor-pointer text-3xl"
                onClick={closeModal}
              >
                &times;
              </span>
              <nav className="flex flex-col h-screen justify-center items-center text-xl gap-6">
                {renderNavMenu({ links: navLinkMobile })}
              </nav>
              <LanguagesSwitcher />
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
              </button>)}
        <div className="hidden lg:inline-block">
            <LanguagesSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
