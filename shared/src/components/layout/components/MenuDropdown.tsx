import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item:string) => {
    console.log(`Clicked on ${item}`);
    // Perform any action here based on the selected item
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2  text-gray-300 rounded focus:outline-none"
      >
        Select an option
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute top-10 right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-10"
          >
            <ul>
              <li
                onClick={() => handleItemClick('Option 1')}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Option 1
              </li>
              <li
                onClick={() => handleItemClick('Option 2')}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Option 2
              </li>
              <li
                onClick={() => handleItemClick('Option 3')}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Option 3
              </li>
            </ul>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default MenuDropdown;
