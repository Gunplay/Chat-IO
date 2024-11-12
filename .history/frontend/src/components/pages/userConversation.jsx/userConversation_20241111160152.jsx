import React from 'react';

const userConversation = () => {
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

				<div>
					Upper User panel
					<div className='btn'>File</div>
					<input className='input placeholder:Messame'>
						{' '}
						<span>Memos</span>
					</input>
				</div>
			</div>
		</>
	);
};

export default userConversation;
