import React from 'react';
import { Conversation } from './Conversation';
const Conversations = () => {
	return (
		<>
			<div className='p-2 flex flex-col overflow-y-scroll max-h-60'>
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
