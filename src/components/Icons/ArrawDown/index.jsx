const IconArrowDown = ({ height = 6, width = 12, color = "black" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.00009 5.82812L0.474609 1.30264L1.60598 0.171271L5.00009 3.56538L8.3942 0.171271L9.52558 1.30264L5.00009 5.82812Z" fill={color} />
    </svg>
  );
};

export default IconArrowDown;