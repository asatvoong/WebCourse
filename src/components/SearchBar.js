import React from 'react'

const SearchBar = ({searchfield, searchChange}) => {	
	return(
		<div>
			<input 
			className='pa3 ba b--green'
			type='search'
			placeholder='search react robots' 
			onChange={searchChange}/>
		</div>
	);
}

export default SearchBar;