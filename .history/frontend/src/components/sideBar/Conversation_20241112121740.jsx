import { BsEmojiExpressionlessFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Conversation = () => {
	return (
		<div>
			<Link to='/chat/message'>_</Link>
			{/* Move the divider outside the Link to prevent it from being clickable */}
			<div className='divider my-0 py-0 h-1' />
		</div>
	);
};
