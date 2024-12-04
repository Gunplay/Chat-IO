import { Link } from 'react-router-dom';

export const MessageContainer = () => {
	return (
		<>
			<div className='flex flex-col md:min-w-[450px]'>
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span></span>
					<span></span>
				</div>
			</div>
			<Link to='/'>
				<button className='btn btn-outline btn-accent'>Leave</button>
			</Link>
		</>
	);
};
