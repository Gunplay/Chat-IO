import { AiFillSetting } from 'react-icons/ai';
import { IoSearchSharp } from 'react-icons/io5';
const Bottombar = () => {
	return (
		<>
			<div className='h-[48px] flex flex-row justify-between items-center bg-black px-2'>
				<div>Chats</div>
				<div className='btn flex flex-col justify-center items-center'>
					<div>Settings</div>
					<span className='size-5'>
						<AiFillSetting />
					</span>
				</div>

				<button type='type' className='btn btn-circle bg-sky-500 text-white'>
					<IoSearchSharp className='w-6 h-6 outline-none' />
				</button>
			</div>
		</>
	);
};

export default Bottombar;
