import BottomBar from './Bottombar';
import Conversations from './Conversations';
import UpperBar from './UpperBar';
const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700 border-slate-500 flex flex-col'>
				<UpperBar />
				<div className='divider px-2' />
				<Conversations />
				<BottomBar />
			</div>
		</>
	);
};

export default SideBar;
