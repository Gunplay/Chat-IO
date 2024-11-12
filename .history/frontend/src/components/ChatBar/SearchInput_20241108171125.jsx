import React from 'react';

const SearchInput = () => {
	return (
		<form className='flex'>
			{' '}
			<div className='form-control'>
				<input
					type='text'
					placeholder='Search'
					className='input input-bordered w-24 md:w-auto'
				/>
			</div>
		</form>
	);
};

export default SearchInput;
