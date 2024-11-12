import React from 'react';

const Bottombar = () => {
	return (
		<>
			<div className='h-[48px] flex flex-row justify-between items-center bg-black px-2'>
				<div>Chats</div>
				<div>Settings</div>

				<button type='type' className='btn btn-circle bg-sky-500 text-white'>
					<IoSearchSharp className='w-6 h-6 outline-none' />
				</button>
			</div>
		</>
	);
};

export default Bottombar;
