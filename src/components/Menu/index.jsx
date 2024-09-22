import { useState } from "react";
import IconArrowDown from "../Icons/ArrawDown";

const Menu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex space-x-2 justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0"
        >
          <span className='text-sm font-semibold'>Release Date</span>
          <div className='flex items-center space-x-1 opacity-80'>
            <span className='text-sm font-semibold'>{selectedValue.value}</span>
            <IconArrowDown />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 top-10 w-full rounded-md bg-white shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option => (
              <button
                key={option.name}
                onClick={() => handleSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {option.name}
              </button>
            )))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu