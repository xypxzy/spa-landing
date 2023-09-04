import i18n from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


interface Language {
  nativeName: string;
}

interface Languages {
  [key: string]: Language;
}




const LanguagesSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const lngs: Languages = {
    en: { nativeName: t('English') },
    ru: { nativeName: t('Russian') },
    kg: { nativeName: t('Kyrgyz') },
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChangeLang = (lng: string) => {
    console.log(lng);
    setIsDropdownOpen(false);
    return i18n.changeLanguage(lng);
  }

  return (
    <div className='relative'>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
        text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleToggleDropdown}
      >        
        {t('Lang')} 
        {
          isDropdownOpen ? (
            <svg className="w-2.5 h-2.5 ml-2.5 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          ) : (
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          )
        }
      </button>
      <div id="dropdownDelay" className={`z-10 ${isDropdownOpen ? 'absolute' : 'hidden'} w-full bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {Object.keys(lngs).map(lng => (
              <li>
                <button 
                  key={lng}
                  className="block text-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleChangeLang(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                  >
                    {lngs[lng].nativeName}
                  </button>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default LanguagesSwitcher