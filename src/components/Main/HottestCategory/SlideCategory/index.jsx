import useSlideList from '../../../../hooks/useSlideList'
import { HOTTEST_CATEGORIES } from '../../../../mocks/main'
import Indicators from '../../../Indicators'
import ItemCategory from '../ItemCategory'

const SlideCategory = () => {
  const [currentIndex, handleIndicatorClick] = useSlideList({ data: HOTTEST_CATEGORIES })

  return (
    <div className="md:hidden mt-6 relative w-full">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {HOTTEST_CATEGORIES.map(item => (
            <div key={item.name} className="w-full flex-shrink-0">
              <ItemCategory item={item} />
            </div>
          ))}
        </div>
      </div>
     
      <div className="container mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start mx-auto pl-0 md:pl-10 space-y-4">
          <Indicators color='#9B9B9B' data={HOTTEST_CATEGORIES} currentIndex={currentIndex} handleItem={handleIndicatorClick} />
        </div>
    </div>
  )
}

export default SlideCategory