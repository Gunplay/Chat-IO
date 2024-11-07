import React from 'react';

export const SignUp = () => {
	return (
		<div className='flex flex-col items-center min-w-96  max-w-30 mx-auto'>
			<div className='w-full p-6 shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg=opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up
					<span className='text-blue-500'> Sync-Talk</span>
				</h1>
				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base babel-text'>Full Name</span>
						</label>
						<input
							type='text'
							value={'John Doe'}
							placeholder='Enter user-name'
							className='w-full input input-bordered h-10'
						></input>
						<label className='label p-2'>
							<span className='text-base babel-text'>User Name</span>
						</label>
						<input
							type='text'
							value={'JohnDoe'}
							placeholder='Enter user-name'
							className='w-full input input-bordered h-10'
						></input>
						<label className='label'>
							<span className='text-base babel-text'>Password</span>
						</label>
						<input
							type='password'
							value={'Confirm password'}
							placeholder='Enter password'
							className='w-full input input-bordered h-10'
						></input>
						<label className='label'>
							<span className='text-base babel-text'>Confirm password</span>
						</label>
						<input
							type='password'
							value={'Confirm password'}
							placeholder='Confirm password'
							className='w-full input input-bordered h-10'
						></input>
					</div>
					<a
						href='#'
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
					>
						Already have an account?
					</a>
					<div>
						<button className='btn btn-block btn-sm mt-2 border-slate-700'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
