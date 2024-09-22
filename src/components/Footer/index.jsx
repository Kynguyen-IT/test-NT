import { useState } from "react"
import logo from "../../assets/images/logos/dark_logo.png"
import { LIST_IMAGE_SOCIAL, LIST_LINKS_FOOTER } from "../../mocks/footer"
import IconPlus from "../Icons/Plus"

const Footer = () => {
  const [selectItem, setSelectItem] = useState()

  const handleOpenItem = (value) => {
    setSelectItem(value !== selectItem ? value : null);
  }

  return (
    <footer className="flex xl:px-5 flex-col justify-center items-center py-5 md:py-14 w-full md:border-t-[1px] border-[#f1f1f1]">
      <div className="flex w-full md:container flex-col-reverse md:flex-row px-6 md:px-0">
        <div className="flex flex-col w-full md:w-2/5">
          <div className="flex flex-col space-y-4">
            <div className="hidden md:flex items-center">
              <img
                src={logo}
                className="h-[31px]"
                alt="Logo"
              />
            </div>

            <span className="text-sm md:max-w-[258px] opacity-40 font-light">Valletta Buildings, South Street, Valletta - VLT 1103 Malta</span>
            <span className="md:hidden text-xs opacity-40 font-light">COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</span>

          </div>

          <div className="flex mt-10 mb-12 md:mb-0 item-center space-x-3">
            {LIST_IMAGE_SOCIAL.map(item => (
              <a key={item} className="flex items-center cursor-pointer">
                <img
                  src={item}
                  className="w-5 h-5"
                  alt="Logo"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-3/5 mb-6 md:mb-0">
          {LIST_LINKS_FOOTER.map(item => (
            <div
              className="flex flex-col w-full md:w-1/4 md:space-y-4 border-b-[1px] border-[#f1f1f1] md:border-none"
              key={item.title}
            >
              <div className="flex py-6 md:py-0 w-full items-center justify-between">
                <span className="text-sm font-semibold uppercase">{item.title}</span>
                <button onClick={() => handleOpenItem(item.title)} className="md:hidden">
                  <IconPlus color="#464646" />
                </button>
              </div>
              <div
                className={`
                  transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible 
                  ${item.title === selectItem ? "flex max-h-40 opacity-100 mb-4 md:mb-0" : "flex max-h-0 opacity-0 md:opacity-100"} 
                  flex-col space-y-2
                `}
              >
                {item.links.map(link => (
                  <a key={link} className="text-xs opacity-40 text-black font-light hover:opacity-100 hover:cursor-pointer">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex mt-20 pt-10 container border-t-[1px] border-[#f1f1f1]">
        <span className="text-xs opacity-40 font-light">COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  )
}

export default Footer