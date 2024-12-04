const SearchInput = () => {
	return (
		<form className='flex items-center gap-2 w-full'>
			{' '}
			<div className='class="form-control bg-red-600'>
				<input
					type='text'
					placeholder='Search'
					className='input input-bordered border-r-4 w-full hover:border-green-400 shadow-md'
				/>
			</div>
		</form>
	);
};

export default SearchInput;

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			{' '}
// 			<div className='form-control'>
// 				<input
// 					type='text'
// 					placeholder='Search'
// 					className='input input-bordered w-24 md:w-auto'
// 				/>
// 			</div>
// 			<button type='type' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };

// export default SearchInput;
