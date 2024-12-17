const DashboardSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <path
      d="M5.5 5.5h17v21h-17v-21Z"
      style={{
        opacity: 0.974,
      }}
    />
    <path
      d="M26.5 5.5h17v13h-17v-13Z"
      style={{
        opacity: 0.948,
      }}
    />
    <path
      d="M26.5 22.5h17v21h-17v-21Z"
      style={{
        opacity: 0.974,
      }}
    />
    <path
      d="M5.5 30.5h17v13h-17v-13Z"
      style={{
        opacity: 0.948,
      }}
    />
  </svg>
);
export default DashboardSVG;