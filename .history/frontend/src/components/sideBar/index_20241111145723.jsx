import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700'>
				<SearchInput />
				<div className='divider px-2' />
				<Conversations />
				<div className='flex flex-row bg-slate-700'>Chats</div>
			</div>
		</>
	);
};

export default SideBar;
