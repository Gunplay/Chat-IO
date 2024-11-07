import React from 'react';

const Login = () => {
	return (
		<div className='flex flex-col items-center max-w-20 mx-auto'>
			<div className='w-full p-6 shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg=opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> Sync-Talk</span>
				</h1>
				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base babel-text'>UserName</span>
						</label>
						<input
							type='text'
							placeholder='Enter user-name'
							className='w-full input input-bordered h-10'
						></input>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
