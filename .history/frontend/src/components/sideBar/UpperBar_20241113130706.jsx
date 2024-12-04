import DropDownMenu from './DropDownMenu';
import SearchInput from './SearchInput';

const UpperBar = () => {
	return (
		<div className='flex flex-raw'>
			<DropDownMenu />
			<SearchInput />
		</div>
	);
};

export default UpperBar;
