import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div className='bg-slate-700'>
				<SearchInput />
				<div className='divider ' />
				<Conversations />
			</div>
		</>
	);
};

export default SideBar;
