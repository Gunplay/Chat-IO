import { useEffect, useState } from 'react';
import { BsEmojiExpressionlessFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Conversation = () => {
	const { width, height } = useScreenSize();
	const routChatMessages = useLocation();
	const currentPath = routChatMessages.pathname;
	console.log(currentPath);
	console.log(width);
	return (
		<div>
			<Link to='{}'>
				<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 -py-1 cursor-pointer'>
					<div className='avatar online'>
						<div className='w-12 rounded-full'>
							<img
								src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
								alt='user avatar'
							/>
						</div>
					</div>

					<div className='flex flex-col flex-1'>
						<div className='flex gap-3 justify-between'>
							<p className='font-bold text-green-200'>John Doe</p>
							<span className='text-xl'>
								<BsEmojiExpressionlessFill />
							</span>
						</div>
					</div>
				</div>
				<div className='divider my-0 py-0 h-1' />
			</Link>
		</div>
	);
};
