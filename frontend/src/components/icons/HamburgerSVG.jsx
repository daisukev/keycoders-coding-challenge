const HamburgerSVG = ({
  width = "50",
  height = 50,
  stroke = "#000",
  fill = "none",
  ...restProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 24 24"
    {...restProps}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 18h16M4 12h16M4 6h16"
    />
  </svg>
);
export default HamburgerSVG;
