import { Link } from 'react-router-dom';
import Messages from './Messages';

export const MessageContainer = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex flex-col md:min-w-[450px]'>
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To:</span>
					<span className='text-gray-900 font-bold'>john Doe</span>
				</div>
			</div>

			<Messages />

			<Link to='/'>
				<button className='btn btn-outline btn-accent'>Leave</button>
			</Link>
		</div>
	);
};
