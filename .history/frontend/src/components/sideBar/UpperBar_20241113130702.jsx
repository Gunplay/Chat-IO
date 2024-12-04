import DropDownMenu from './DropDownMenu';
import SearchInput from './SearchInput';

const UpperBar = () => {
	return (
		<div className='flex flex-col'>
			<DropDownMenu />
			<SearchInput />
		</div>
	);
};

export default UpperBar;
