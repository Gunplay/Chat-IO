import SideBar from '../../sideBar/index';
import { MessageContainer } from '../messageContainer/MessageContainer';
export const Home = () => {
	return (
		<div className='flex sm:h-[584px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur bg-opacity-0'>
			<SideBar />
			<MessageContainer />
		</div>
	);
};
