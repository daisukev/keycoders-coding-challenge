const LockSVG = ({ width = 25, height = 25, fill = '#000000' }) => {

    return (<svg fill={fill} xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xml:space="preserve">
        <path d="M74,80H26c-3.3,0-6-2.7-6-6V26c0-3.3,2.7-6,6-6h48c3.3,0,6,2.7,6,6v48C80,77.3,77.3,80,74,80z M28.1,30v40
	c0,1.1,0.9,2,2,2H70c1.1,0,2-0.9,2-2V30c0-1.1-0.9-2-2-2H30.1C29,28,28.1,28.9,28.1,30z"/>
        <path d="M66.3,47.3l-1.2-3.8c-0.3-1-1.5-1.6-2.5-1.3L53.9,45v-8.6c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v8.6l-8.5-2.8
	c-1-0.3-2.2,0.3-2.5,1.3l-1.2,3.8c-0.3,1,0.3,2.2,1.3,2.5l7.9,2.6l-5.7,7.8c-0.6,0.9-0.4,2.2,0.5,2.8l3.3,2.3
	c0.9,0.6,2.2,0.4,2.8-0.5l6.3-8.7l6.3,8.7c0.6,0.9,1.9,1.1,2.8,0.5l3.3-2.3c0.9-0.6,1.1-1.9,0.5-2.8l-5.7-7.9l7.8-2.5
	C66,49.4,66.6,48.3,66.3,47.3z"/>
    </svg>
    )
}

export default LockSVG
