import { AiFillSetting } from 'react-icons/ai';
import { TfiMenuAlt } from 'react-icons/tfi';
import LogOutButton from './LogOutButton';

const DropDownMenu = () => {
	return (
		<div className='dropdown dropdown-hover z-11'>
			<div tabIndex={0} role='button' className='btn m-1'>
				<TfiMenuAlt className='size-5' />
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow m-1'
			>
				<li>
					<LogOutButton />
				</li>
				<li>
					<span>
						<AiFillSetting className='w-6 h-6' />
						Settings
					</span>
				</li>
			</ul>
		</div>
	);
};

export default DropDownMenu;
