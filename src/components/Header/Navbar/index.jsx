import { useState } from 'react'
import logo from "../../../assets/images/logos/logo.png"
import { LINKS } from "../../../mocks/header";
import IconToggle from "../../Icons/Toggle";
import "./styles.css"
import IconPlus from '../../Icons/Plus/index';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="fixed z-50 w-full px-5 bg-header bg-[#00000099]">
    <div className="flex mx-auto container justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          className="h-[31px] md:h-[64px] my-[13px]"
          alt="Logo"
        />
      </div>

      <button
        onClick={handleToggle}
        className={`md:hidden bg-transparent w-12 h-12 flex justify-center items-center ${isMenuOpen? "rotate-45": "rotate-0"}`}
      >
        {isMenuOpen ? <IconPlus width={18} height={18} color='white'/> : <IconToggle />}
      </button>

      <nav className="hidden h-full md:flex space-x-8">
        {LINKS.map(link => (
          <div key={`link-${link.name}`}
            className={`h-[90px] flex items-center cursor-pointer ${link.isActive ? "border-b-[3px] border-white" : ""}`}>
            <a
              className={`text-sm uppercase text-white hover:opacity-100 hover:text-white ${link.isActive ? "opacity-100" : "opacity-50"}`}
            >
              {link.name}
            </a>
          </div>
        ))}
      </nav>

      {isMenuOpen && (
        <div className={`absolute top-[57px] right-0 w-full bg-white md:hidden transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
          <nav className="flex flex-col space-y-4 p-5 items-center">
            {LINKS.map(link => (
              <a
                key={`link-${link.name}`}
                className={`text-sm uppercase text-black hover:opacity-100 ${link.isActive ? "opacity-100" : "opacity-50"}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  </div>
  )
}

export default Navbar