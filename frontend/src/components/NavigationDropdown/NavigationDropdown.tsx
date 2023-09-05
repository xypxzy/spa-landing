import { useState } from 'react';
import { DropdownButton } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';


// Main App component
function NavigationDropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDoubleDropdownVisible, setIsDoubleDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleDoubleDropdown = () => {
    setIsDoubleDropdownVisible(!isDoubleDropdownVisible);
  };

  // const menuItems = [
  //   { label: 'Dashboard', link: '#' },
  //   { label: 'Earnings', link: '#' },
  //   { label: 'Sign out', link: '#' },
  // ];

  // const doubleDropdownItems = [
  //   { label: 'Overview', link: '#' },
  //   { label: 'My downloads', link: '#' },
  //   { label: 'Billing', link: '#' },
  //   { label: 'Rewards', link: '#' },
  // ];

  return (
    <div>
      <DropdownButton label="Dropdown button" onClick={toggleDropdown} />
      <DropdownMenu isVisible={isDropdownVisible} />
      
      <button
        onClick={toggleDoubleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        type="button"
      >
        Dropdown
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
      <DropdownMenu  isVisible={isDoubleDropdownVisible} />
    </div>
  );
}

export default NavigationDropdown;
