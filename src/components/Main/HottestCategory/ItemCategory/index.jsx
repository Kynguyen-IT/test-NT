import useElementSize from '../../../../hooks/useElementSize';
import InfoCategory from '../InfoCategory';
import ListImage from '../ListImage';

const ItemCategory = ({ item }) => {
  const [elementRef, size] = useElementSize();

  return (
    <div className="flex w-full md:w-1/2 space-x-4 bg-[#0000000D] p-4 rounded-3xl">
      <div className="flex w-1/2 space-y-4 flex-col">
        <InfoCategory
          icon={item.icon}
          name={item.name}
          desc={item.desc}
          bgColor={item.bgColor}
        />

        <ListImage data={item.listGames.slice(0, 2)} />
      </div>

      <div className="flex w-1/2 space-y-4 flex-col">
        <ListImage data={item.listGames.slice(0, 2)} />

        <div ref={elementRef} style={{ height: size.width }} key={item} className="flex justify-center items-center">
          <img className="h-full w-full object-container rounded-3xl" src={item.image} />
        </div>
      </div>
    </div>
  )
}

export default ItemCategory