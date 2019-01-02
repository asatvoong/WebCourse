import React from 'react'
import './Scroll.css'

const Scroll = (props) => {
	// return (	
	// 	<div style={{overflow: 'scroll',border: '2px solid black',height: '800px'}}>
	// 		{props.children}
	// 	</div>
	// );
	return (	
		<div className="scrollstyle">
			{props.children}
		</div>
	);
}

export default Scroll;
