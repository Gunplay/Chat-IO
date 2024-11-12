import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div>
				<SearchInput />
				<div className='divider px-3' />
				<Conversations />
				<div className='flex-none gap-2'></div>
			</div>
		</>
	);
};

export default SideBar;
