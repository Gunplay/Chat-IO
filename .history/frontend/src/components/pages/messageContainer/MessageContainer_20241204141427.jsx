import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import Messages from './Messages';

export const MessageContainer = () => {
	return (
		<>
			<div className='md:min-w-[450px] sm:h-[584px] '>
				<div className='flex flex-col md:min-w-[550px]'>
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text text-blue-100'>To: </span>
						<span className='font-bold text-green-300'> John Doe</span>
					</div>
				</div>
				<Messages />
				<div className='flex flex-col'>
					<MessageInput />
				</div>
				<div className='bg-black'>
					<Link to='/'>
						<button className='btn btn-outline btn-accent'>Leave</button>
					</Link>
				</div>
			</div>
		</>
	);
};
