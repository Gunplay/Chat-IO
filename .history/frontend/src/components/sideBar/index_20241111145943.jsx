import { IoSearchSharp } from 'react-icons/io5';
import Conversations from './Conversations';
import SearchInput from './SearchInput';
const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700'>
				<SearchInput />
				<div className='divider px-2' />
				<Conversations />
				<div className='flex flex-row justify-center bg-black'>
					<div>Chats</div>
					<div>Settings</div>

					<button type='type' className='btn btn-circle bg-sky-500 text-white'>
						<IoSearchSharp className='w-6 h-6 outline-none' />
					</button>
				</div>
			</div>
		</>
	);
};

export default SideBar;
