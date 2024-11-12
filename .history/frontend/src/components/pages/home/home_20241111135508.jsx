import SideBar from '../../sideBar/index';
export const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur bg-opacity-0 min-w-200'>
			<SideBar />
		</div>
	);
};
