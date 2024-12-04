import useScreenSize from '../../customsHooks/useScreenResize';
import SideBar from '../../sideBar/index';
import { MessageContainer } from '../messageContainer/MessageContainer';
export const Home = () => {
	const { width } = useScreenSize();
	return (
		<div className='flex sm:h-[584px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur bg-opacity-0'>
			<SideBar />

			{width > 620 ? <MessageContainer /> : null}
			<MessageContainer />
		</div>
	);
};
