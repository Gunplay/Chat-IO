import React from 'react';
import DropDownMenu from './DropDownMenu';
import SearchInput from './SearchInput';

const UpperBar = () => {
	return (
		<div className='flex'>
			<DropDownMenu />
			<SearchInput />
		</div>
	);
};

export default UpperBar;
