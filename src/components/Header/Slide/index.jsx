import { SLIDE_ITEMS } from "../../../mocks/header"
import IconRight from "../../Icons/Right";
import Indicators from "../../Indicators";
import useSlideList from "../../../hooks/useSlideList";

const Slide = () => {
  const [currentIndex, handleIndicatorClick] = useSlideList({data: SLIDE_ITEMS})

  return (
    <div className="relative w-full">
      <div className="relative h-[420px] md:h-[576px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-full z-30 bottom-10 left-0 rtl:space-x-reverse">
        <div className="container flex flex-col md:flex-row items-center justify-center md:justify-start mx-auto pl-0 md:pl-10 space-y-4">
          <Indicators data={SLIDE_ITEMS} currentIndex={currentIndex} handleItem={handleIndicatorClick}/>
         
          <div className="md:hidden flex flex-col h-full justify-center items-end space-y-4">
            <span className="text-white w-full text-2xl text-center">{SLIDE_ITEMS[currentIndex]?.name}</span>

            <button className="flex items-center text-white space-x-2">
              <span className="text-sm">Game Details</span>
              <IconRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
