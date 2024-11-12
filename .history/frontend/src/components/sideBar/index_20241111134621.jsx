import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div className='bg-slate-800'>
				<SearchInput />
				<div className='divider px-3' />
				<Conversations />
			</div>
		</>
	);
};

export default SideBar;
