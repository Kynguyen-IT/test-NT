import useElementSize from "../../../../hooks/useElementSize";

const InfoCategory = ({ icon, name, desc, bgColor }) => {
  const [elementRef, size] = useElementSize();

  return (
    <div
      ref={elementRef}
      style={{
        height: size.width,
        backgroundColor: bgColor
      }}
      className="flex flex-col p-5 pb-8 rounded-3xl space-y-3 text-white"
    >
      <span className="h-5">{icon}</span> 
      <span className="text-base md:text-xl">{name}</span>
      <span className="text-xs md:text-sm">{desc}</span>
    </div>
  )
}

export default InfoCategory