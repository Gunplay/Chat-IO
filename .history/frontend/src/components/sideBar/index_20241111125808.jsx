import SearchInput from './SearchInput';

const ChatBar = () => {
	return (
		<>
			<div className='navbar bg-base-100 border border-blue-800'>
				<div className='dropdown dropdown-end'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='w-10 rounded-full'>
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
				<div className='divider px-3'></div>
			</div>
			{/* <Coversations />
			<Coversations /> */}
		</>
	);
};

export default ChatBar;
