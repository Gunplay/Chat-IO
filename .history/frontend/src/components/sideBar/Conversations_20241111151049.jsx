import React from 'react';
import { Conversation } from './Conversation';
const Conversations = () => {
	return (
		<>
			<div className='p-2 flex flex-col h-5 overflow-scroll w-full'>
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
				<Conversation />
			</div>
		</>
	);
};

export default Conversations;
