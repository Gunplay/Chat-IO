import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div>
				<div className='divider' />
				<SearchInput />
				<div className='flex-none gap-2'></div>
				<Conversations />
			</div>
		</>
	);
};

export default SideBar;
