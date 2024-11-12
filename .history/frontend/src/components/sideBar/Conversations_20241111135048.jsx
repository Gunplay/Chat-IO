import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { Conversation } from './Conversation';
const Conversations = () => {
	return (
		<>
			<div className='p-2 flex flex-col overflow-auto w-full'>
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
			</div>
			<div className='flex flex-row justify-end z-10'>
				<button type='type' className='btn btn-circle bg-sky-500 text-white'>
					<IoSearchSharp className='w-6 h-6 outline-none' />
				</button>
			</div>
		</>
	);
};

export default Conversations;
