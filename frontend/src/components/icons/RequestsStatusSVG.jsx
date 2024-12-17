const RequestsStatusSVG = (props) => (
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
            d="M21.5 1.5c3.825-.711 6.825.455 9 3.5l11 1L43 7.5a289.236 289.236 0 0 1 0 34L41.5 43a289.236 289.236 0 0 1-34 0L6 41.5a289.249 289.249 0 0 1 0-34L7.5 6c5.502.347 10.168-1.153 14-4.5Zm2 5c3.174.452 3.508 1.452 1 3-2.02-.633-2.353-1.633-1-3Zm10 10c1.256-.039 2.256.461 3 1.5l-15 15c-2.936-.893-5.436-2.726-7.5-5.5-.563-1.225-.23-2.225 1-3 1.74 2.453 3.907 3.953 6.5 4.5a210.64 210.64 0 0 0 12-12.5Z"
            style={{
                opacity: 0.932,
            }}
        />
    </svg>
)
export default RequestsStatusSVG 
