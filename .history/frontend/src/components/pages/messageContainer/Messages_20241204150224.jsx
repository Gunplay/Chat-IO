import Message from './Message';
const Messages = () => {
	return (
		<div className='px-4 flex-1 overflow-auto h-[350px] sm:h-[354px]'>
			<Message />
			<Message />
			<Message />
			{/* <Message />
			<Message />
			<Message /> */}
		</div>
	);
};

export default Messages;
