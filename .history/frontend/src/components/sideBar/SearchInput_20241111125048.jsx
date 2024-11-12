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
			<button type='type' className='btn bg-sky-500 text-white'>
				{/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
			</button>
		</form>
	);
};

export default SearchInput;
