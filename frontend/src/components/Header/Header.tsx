import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import cls from "./Header.module.css";

function Header() {
  return (
    <header className={cls.header}>
      <div className={cls.header__wrapper}>
        <Link to={"/"} className={cls.header__logo}>
          <Logo className="w-14 h-14" />
          <span className={cls.header__logo_title}>My Ticket</span>
        </Link>
        <nav className={cls.header__nav}>
          <Link
            to={"/"}
            className={`${cls.header__nav_item} ${cls["link-underline"]} ${cls["link-underline-black"]}`}
          >
            Home
          </Link>
          <Link
            to={"/"}
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
        </nav>
        <div>
          <button className={cls.header__lang}>RU</button>
          <button className={cls.header__lang}>EN</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
