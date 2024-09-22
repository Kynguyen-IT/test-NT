import { useState } from "react"
import { MENU_ITEMS } from "../../mocks/main"
import IconSearch from "../Icons/Search"

const SiderBar = () => {
  const [isActice, setIsActice] = useState(MENU_ITEMS[0].name)

  const handleItem = (value) => {
    setIsActice(value)
  }

  return (
    <>
      <div className='hidden md:flex flex-col w-[160px]'>
        <div className="relative w-full">
          <input type="text"
            className="pl-7 w-full py-2 border-0 border-b border-[#ccc] placeholder:text-[#ccc] font-semibold text-base focus:border-[#ccc] focus:ring-0"
            placeholder="Search" />
          <div className="absolute inset-y-0 left-0 pl-0  
                    flex items-center  
                    pointer-events-none">
            <IconSearch color="#ccc" />
          </div>
        </div>

        <div className="flex mt-5 flex-col w-full space-y-3">
          {MENU_ITEMS.map(item => (
            !item.isShoOnMobile && (
              <div key={item.name} onClick={() => handleItem(item.name)} className="flex w-full items-center cursor-pointer">
                <item.icon color={isActice === item.name ? "#000" : "#ccc"} />
                <span className={`ml-2 text-base font-semibold ${isActice === item.name ? "text-black" : "text-[#ccc]"}`}>{item.name}</span>
              </div>
            )    
          ))}
        </div>
      </div>

      <div className="md:hidden flex w-full border-b-[1px] border-[#ccc]">
        {MENU_ITEMS.map(item => (
          <div 
            key={`mobile-${item.name}`} 
            onClick={() => !item.isShoOnMobile && handleItem(item.name)} 
            className={
              `flex py-5 w-1/5 flex-col items-center cursor-pointer space-y-1 
              ${item.name === "Filter" && "border-l-[1px] border-[#ccc]"}
              ${isActice === item.name && "border-b-[1px] border-[#000]"}
            `}
            >
            <item.icon color={isActice === item.name ? "#000" : "#ccc"} />
            <span className={`text-[10px] text-center uppercase font-semibold ${isActice === item.name ? "text-black" : "text-[#ccc]"}`}>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default SiderBar