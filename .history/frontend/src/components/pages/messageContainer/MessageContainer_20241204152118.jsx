import { Link } from 'react-router-dom';
import MessageInput from './MessageInput';
import Messages from './Messages';
import from
export const MessageContainer = () => {
	//const desktopScreen = useScreenSize();
	const noChatSelected = true;
	return (
		<>
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<div className='md:min-w-[450px] sm:h-[584px] '>
					<div className='flex flex-cosl md:min-w-[550px]'>
						<div className='bg-slate-500 px-4 py-2 mb-2'>
							<span className='label-text text-blue-100'>To: </span>
							<span className='font-bold text-green-300'> John Doe</span>
						</div>
					</div>
					<Messages />
					<MessageInput />

					<div className='bg-black'>
						<Link to='/'>
							<button className='btn btn-outline btn-accent'>Leave</button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome John Doe</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
