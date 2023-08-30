import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import cls from './Header.module.css';
import { useEffect, useState } from 'react';

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = scrollY > 0 ? 'bg-white' : 'bg-none';

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
          <Link to={'/'} className={`${cls.header__nav_item} ${cls['link-underline']} ${cls['link-underline-black']}`}>Home</Link>
          <Link to={'/'} className={`${cls.header__nav_item} ${cls['link-underline']} ${cls['link-underline-black']}`}>About</Link>
          <Link to={'/'} className={`${cls.header__nav_item} ${cls['link-underline']} ${cls['link-underline-black']}`}>Team</Link>
          <Link to={'/'} className={`${cls.header__nav_item} ${cls['link-underline']} ${cls['link-underline-black']}`}>Contact</Link>
        </nav>
        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className='hidden md:block'>
          <button className={cls.header__lang}>
            RU
          </button>
          <button className={cls.header__lang}>
            EN
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
