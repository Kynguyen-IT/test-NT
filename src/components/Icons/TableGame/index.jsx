const IconTableGame = ({ height = 20, width = 22, color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <path d="M21.3791 12.3057C21.3791 9.44555 19.0091 7.08429 16.0849 7.01722C16.1194 6.77273 16.1378 6.52428 16.1378 6.27794C16.1378 3.36074 13.7063 0.988281 10.7166 0.988281C7.72779 0.988281 5.29673 3.36074 5.29673 6.27794C5.29673 6.62506 5.33176 6.97189 5.40026 7.31135C2.69282 7.60219 0.579102 9.90088 0.579102 12.5675C0.579102 15.484 3.01123 17.8571 6.00074 17.8571C7.62696 17.8571 9.18395 17.1316 10.2063 15.9083C9.77803 17.8331 8.50203 20.231 4.9173 21.177L4.76809 21.2169L4.84396 21.7883H17.2063L17.2732 21.2119L17.1229 21.177C16.9608 21.1371 13.1881 20.1641 11.9729 15.8925C12.9868 16.9625 14.4605 17.5946 15.9587 17.5946C18.9472 17.5946 21.3791 15.2226 21.3791 12.3057Z" fill={color} />
    </svg>
  );
};

export default IconTableGame;