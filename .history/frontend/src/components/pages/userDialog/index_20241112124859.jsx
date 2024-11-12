import { Link } from 'react-router-dom';
export const UserDialog = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<div className='flex'>
					Upper User panel
					<div>Back Home</div>
					<div>Kirill MTC</div>
					<div>KM</div>
				</div>

				<div className='flex flex-col'>
					{' '}
					Dialog
					<div>Hello Kirill</div>
					<div>Hello Kirill</div>
					<div>Hello Kirill</div>
					<div>Hello Kirill</div>
				</div>

				<div className='flex flex-row'>
					Upper User panel
					<div className='btn'>File</div>
					<input className='input placeholder:Message' />
				</div>
			</div>
			<Link to='/'>
				<button className='btn btn-outline btn-accent'>Leave</button>
			</Link>
		</>
	);
};
