const IconArrowLeft = ({ height = 20, width = 20, color = "#ccc" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.99978 15.0711L9.41399 13.6569L3.75714 8L9.41399 2.34315L7.99978 0.928932L0.928711 8L7.99978 15.0711Z" fill={color} />
    </svg>
  );
};

export default IconArrowLeft;