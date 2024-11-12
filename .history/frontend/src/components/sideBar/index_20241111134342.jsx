import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div>
				<SearchInput />
				<div className='divider' />
				<div className='flex-none gap-2'></div>
				<Conversations />
			</div>
		</>
	);
};

export default SideBar;
