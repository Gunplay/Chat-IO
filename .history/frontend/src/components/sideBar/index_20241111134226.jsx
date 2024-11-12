import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div>
				<div className='flex-none gap-2'>
					<SearchInput />
				</div>
				<div className='divider' />
				<Conversations />
			</div>
		</>
	);
};

export default SideBar;
