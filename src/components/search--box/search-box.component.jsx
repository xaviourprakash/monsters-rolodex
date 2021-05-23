/** @format */

import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, onSearchChange }) => {
	return (
		<input
			type='search'
			className='search'
			placeholder={placeholder}
			onChange={onSearchChange}
		/>
	);
};
