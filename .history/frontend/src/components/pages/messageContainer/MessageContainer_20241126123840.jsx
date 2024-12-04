import { Link } from 'react-router-dom';
import Messages from './Messages';

export const MessageContainer = () => {
	return (
		<div className='flex-col sm:h-[584px] '>
			<div className='flex flex-col md:min-w-[550px]'>
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To: </span>
					<span className='text-gray-900 font-bold'> John Doe</span>
				</div>
			</div>

			<Messages />

			<div className='bg-black'>
				<Link to='/'>
					<button className='btn btn-outline btn-accent'>Leave</button>
				</Link>
			</div>
		</div>
	);
};
