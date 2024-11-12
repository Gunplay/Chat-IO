import React from 'react';

export const Conversation = () => {
	return (
		<>
			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 -py-1 cursor-pointer'>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
							alt='user avatar'
						></img>
					</div>
				</div>
				<div className='flex'></div>
			</div>
			<div></div>
		</>
	);
};
