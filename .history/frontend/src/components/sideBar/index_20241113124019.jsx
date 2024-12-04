import BottomBar from './Bottombar';
import Conversations from './Conversations';
import SearchInput from './SearchInput';
const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700 border-r border-slate-500 p-4 flex flex-col'>
				<SearchInput />
				<div className='divider px-2' />
				<Conversations />
				<BottomBar />
			</div>
		</>
	);
};

export default SideBar;
