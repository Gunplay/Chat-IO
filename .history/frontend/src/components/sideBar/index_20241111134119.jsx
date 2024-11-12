import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div className=' flex flex-col navbar border border-blue-800'>
				{/* <div className='flex-1'>
					<a className='btn btn-ghost text-sm text-orange-600 shadow-md '>
						Sync-Talk
					</a>
				</div> */}
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
