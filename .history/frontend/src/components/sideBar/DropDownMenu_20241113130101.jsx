import { TfiMenuAlt } from 'react-icons/tfi';
import LogOutButton from './LogOutButton';
const DropDownMenu = () => {
	return (
		<div className='dropdown'>
			<div tabIndex={0} role='button' className='btn m-1'>
				<TfiMenuAlt />
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
			>
				<li>
					<span>
						<LogOutButton />
					</span>
				</li>
				<li>
					<a>Item 2</a>
				</li>
			</ul>
		</div>
	);
};

export default DropDownMenu;
