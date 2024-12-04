import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='w-full relative bg-red-400'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700s border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button
					type='submit'
					className='absolute inset-y-0 flex items items-center pe-3'
				>
					<BsSend />
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
