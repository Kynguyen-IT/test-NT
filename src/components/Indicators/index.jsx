const Indicators = ({ data, currentIndex, handleItem, color = "white" }) => {
  return (
    <div className="flex items-center space-x-3">
      {data.map((_, index) => {
        const isActive = index === currentIndex; // Check active state once
        return (
          <button
            key={index}
            type="button"
            className={`flex justify-center items-center ${
              isActive ? "w-[18px] h-[18px] border-[1px]" : "w-2 h-2 opacity-50"
            } rounded-full`}
            style={{
              borderColor: isActive ? color : "transparent",
              backgroundColor: isActive ? "transparent" : color,
            }}
            aria-current={isActive ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleItem(index)}
          >
            {isActive && (
              <span
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: color }}
              />
            )}
          </button>
        );
      })}
    </div>
  )
}

export default Indicators