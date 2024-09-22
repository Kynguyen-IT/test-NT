import useElementSize from "../../../../hooks/useElementSize";

const ListImage = ({ data }) => {
  const [elementRef, size] = useElementSize();

  return (
    <div className="flex space-x-4">
      {data.map((item) => (
        <div ref={elementRef} style={{height: size.width}} key={item} className="flex justify-center items-center w-1/2">
          <img className="h-full w-full object-container rounded-2xl" src={item} />
        </div>
      ))}
    </div>
  )
}

export default ListImage