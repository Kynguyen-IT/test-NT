import IconPlus from "../Icons/Plus"
import SiderBar from "../Siderbar"
import HotGame from "./HotGame"
import HottestCategory from "./HottestCategory"

const Main = () => {
  return (
    <main className="flex xl:px-5 pb-5 flex-col md:flex-row mx-auto md:container mt-0 md:mt-20 space-x-0 md:space-x-10">
      <SiderBar />
      <div className="flex flex-col w-full space-y-10">
        <HotGame />
        <HottestCategory />
        <div className="flex flex-col mx-5">
          <button
            type="button"
            className="md:hidden flex p-4 space-x-2 text-black justify-center items-center bg-[#00000005] border border-[#00000005] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-base"
          >
            <span className="text-base">Load More</span>
            <IconPlus/>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Main