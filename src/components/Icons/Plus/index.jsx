const IconPlus = ({ height = 12, width = 12, color = "#000000" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
    </svg>
  )
}

export default IconPlus