import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface LinkProps {
  title: string;
  path: string;
  onClick?: () => void;
}

interface DropdownMenuProps {
  // items: LinkProps[],
  isVisible: boolean 
}

// Dropdown menu component
export function DropdownMenu({ isVisible }: DropdownMenuProps) {

  const { t } = useTranslation(); 

  const navLinkMobile: LinkProps[] = [
    {title: t('Home'), path: '/'},
    {title: t('About'), path: '/aboutUs'},
    {title: t('Services'), path: '/services'},
  ]


  const renderNavMenu: FC<{ links: LinkProps[] }> = ({ links }) => (
    <>
      {links.map((link, id) => (
        <Link
          key={id}
          to={link.path}
          // className={`${cls.header__nav_item} ${cls['link-underline']} ${cls['link-underline-black']}`}
          onClick={link.onClick && link.onClick}
        >
          {link.title}
        </Link>
      ))}
    </>
  );

  if (!isVisible) {
    return null;
  }

  return (
    <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {renderNavMenu({links: navLinkMobile})}
      </ul>
    </div>
  );
}