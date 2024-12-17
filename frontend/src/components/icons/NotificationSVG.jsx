const NotificationSVG = (props) => (
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
      d="M21.5 3.5c3.36-.71 5.193.624 5.5 4 5.093 2.091 8.426 5.758 10 11l1 15c2.264 1.416 3.431 3.416 3.5 6h-36c-.408-3.1.759-5.433 3.5-7 .138-6.081.804-12.081 2-18 2.16-3.162 4.993-5.495 8.5-7l2-4Z"
      style={{
        opacity: 0.935,
      }}
    />
    <path
      d="M18.5 41.5c2.787-.977 5.787-1.31 9-1 .032 4.713-2.3 6.213-7 4.5a19.606 19.606 0 0 0-2-3.5Z"
      style={{
        opacity: 0.663,
      }}
    />
  </svg>
);
export default NotificationSVG;
