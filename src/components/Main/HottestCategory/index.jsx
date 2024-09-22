import BoxTitle from "../BoxTitle"
import { HOTTEST_CATEGORIES } from "../../../mocks/main";
import ItemCategory from "./ItemCategory";
import SlideCategory from "./SlideCategory";

const HottestCategory = () => {

  return (
    <div className="flex mt-5 md:mt-0 flex-col md:mx-0">
      <div className="flex flex-col mx-5">
        <BoxTitle title="Hottest Category" />
        <div className="hidden md:flex flex-col md:flex-row mt-4 space-y-6 md:space-y-0 md:space-x-6">
          {HOTTEST_CATEGORIES.map(item => (
            <ItemCategory key={item.name} item={item} />
          ))}
        </div>
      </div>
      <SlideCategory />
    </div>
  )
}

export default HottestCategory
