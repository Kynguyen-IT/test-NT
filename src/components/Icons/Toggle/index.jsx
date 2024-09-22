const IconToggle = ({ height = 48, width = 48, color = "#ffffff" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <rect x="15" y="14" width="18" height="2" fill={color} />
      <rect x="15" y="20" width="18" height="2" fill={color} />
      <rect x="15" y="26" width="18" height="2" fill={color} />
    </svg>
  );
};

export default IconToggle;