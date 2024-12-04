import BottomBar from './Bottombar';
import Conversations from './Conversations';
import SearchInput from './SearchInput';
const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700 w-[270px]'>
				<SearchInput />
				<div className='divider px-2' />
				<Conversations />
				<BottomBar />
			</div>
		</>
	);
};

export default SideBar;
