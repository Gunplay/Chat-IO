import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700 w-2'>
				<SearchInput />
				<div className='divider px-2' />
				<Conversations />
			</div>
		</>
	);
};

export default SideBar;
