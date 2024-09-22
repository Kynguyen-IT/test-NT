const IconArrowRight = ({ height = 20, width = 20, color = "#ccc" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.00022 0.928932L0.586008 2.34315L6.24286 8L0.586008 13.6569L2.00022 15.0711L9.07129 8L2.00022 0.928932Z" fill={color} />
    </svg>
  );
};

export default IconArrowRight;