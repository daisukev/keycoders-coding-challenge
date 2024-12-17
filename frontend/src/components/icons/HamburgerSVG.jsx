const HamburgerSVG = ({
  width = "50",
  height = 50,
  stroke = "#000",
  ...restProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...resProps}
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
