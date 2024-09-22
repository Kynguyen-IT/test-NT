import { HOT_GAMES } from "../../../mocks/main"
import BoxTitle from "../BoxTitle"

const HotGame = () => {
  return (
    <div className="flex mt-5 md:mt-0 flex-col mx-5 md:mx-0">
      <BoxTitle isShowMenu title="Hot Name"/>

      <div className="flex flex-col md:flex-row mx-4 md:mx-0 mt-6 space-x-0 md:space-x-6 space-y-5 md:space-y-0">
        {HOT_GAMES.map((item) => (
          <div key={item.name} className="flex flex-col w-full md:w-1/2">
            <div className="flex justify-center items-center w-full h-[180px] md:h-[222px]">
              <img className="h-full w-full object-fill rounded-t-xl md:rounded-xl" src={item.bg} />
            </div>

            <div className={`flex flex-col w-full mt-[-5px] md:mt-10 p-4 md:p-0 justify-between rounded-b-xl md:rounded-none ${item.bgColor} md:bg-transparent`}>
              <div className="flex w-full space-x-5 items-center">
                <div className="flex justify-center items-center min-w-[60px] h-[60px] md:min-w-[90px] md:h-[90px]">
                  <img className="h-full w-full object-cover" src={item.image} />
                </div>

                <div className="flex flex-col space-y-1 md:space-y-0">
                  <span className="text-white md:text-black text-base md:text-xl">{item.name}</span>
                  <span className="text-white md:text-black text-xs md:text-sm opacity-50 md:opacity-100">{item.desc}</span>
                </div>

                <button
                  type="button"
                  className="hidden lg:flex h-7 justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  view
                </button>
              </div>

              <div className="flex md:hidden justify-between mt-6">
                {item.data.map(i => (
                  <div key={i.text} className="flex flex-col">
                    <span className="text-sm text-white">{i.value}</span>
                    <span className="text-xs opacity-50 text-white">{i.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default HotGame
