import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import LanguagesSwitcher from '../LanguagesSwitcher/LanguagesSwitcher';
import cls from './Header.module.css';

interface LinkProps {
  title: string;
  path: string;
  onClick?: () => void;
}


function Header() {
  const { t } = useTranslation();

  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Specify the type explicitly
  const handleScroll = () => setScrollY(window.scrollY);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor =
    scrollY > 0
      ? 'bg-white transition-color duration-100 ease-in-out'
      : 'bg-none';

  // Рендер навигационной меню

  const navLink: LinkProps[] = [
    {title: t("Home"), path: '/'},
    {title: t('About us'), path: '/aboutUs'},
  ]

  

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
        <nav className=" md:hidden block right-8 border-gray-200  ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
          >
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
                aria-controls="navbar-dropdown"
                onClick={(event) => {
                  event.preventDefault();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            <div className={`w-full  top-16 left-0 md:w-auto ${isMenuOpen ? 'absolute' : 'hidden'}`} id="navbar-dropdown" ref={menuRef}>
              <ul className={`flex flex-col gap-3 items-center font-medium p-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white`}>
              {navLink.map((link, id) => (
                <Link
                  key={id}
                  to={link.path}
                  className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <LanguagesSwitcher handleCloseNav={() => setIsMenuOpen(false)}/>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hidden md:inline-block">
            <LanguagesSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
