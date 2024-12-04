import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import Messages from './Messages';

export const MessageContainer = () => {
	return (
		<div className='flex flex-col md:min-w-[450px] sm:h-[984px] bg-gray-800'>
			{/* Header */}
			<div className='bg-slate-500 px-4 py-2 mb-2'>
				<span className='label-text text-blue-100'>To: </span>
				<span className='font-bold text-green-300'> John Doe</span>
			</div>

			{/* Main Content */}
			<div className='flex-1 flex flex-col overflow-hidden'>
				{/* Scrollable Messages */}
				<Messages />

				{/* Message Input */}
				<div className='bg-gray-700 p-2'>
					<MessageInput />
				</div>
			</div>

			{/* Footer */}
			<div className='bg-black p-2'>
				<Link to='/'>
					<button className='btn btn-outline btn-accent'>Leave</button>
				</Link>
			</div>
		</div>
	);
};
