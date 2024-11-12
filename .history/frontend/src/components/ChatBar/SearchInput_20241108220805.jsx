const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
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
