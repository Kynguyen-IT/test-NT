import { LIST_OPTIONS_SORT } from '../../../mocks/main';
import IconArrowLeft from '../../Icons/ArrowLeft'
import IconArrowRight from '../../Icons/ArrowRight'
import Menu from '../../Menu';

const BoxTitle = ({ title, isShowMenu = false }) => {

  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="flex text-lg md:text-[28px] font-medium uppercase md:capitalize">{title}</h2>
      <div className="hidden md:flex items-center">
        <button className="flex w-8 h-8 justify-center items-center opacity-50">
          <IconArrowLeft />
        </button>

        <button className="flex w-8 h-8 justify-center items-center">
          <IconArrowRight />
        </button>
      </div>

      {isShowMenu && <Menu options={LIST_OPTIONS_SORT}/>}
    </div>
  )
}

export default BoxTitle
