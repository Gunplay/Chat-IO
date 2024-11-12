import Conversations from './Conversations';
import SearchInput from './SearchInput';

const SideBar = () => {
	return (
		<>
			<div className=' flex flex-col navbar border border-blue-800'>
				<div className='dropdown dropdown-end'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
					>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
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
