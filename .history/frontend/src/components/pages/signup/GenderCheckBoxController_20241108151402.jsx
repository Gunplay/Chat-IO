import React from 'react';

export const GenderCheckBoxController = () => {
	return (
		<div className='flex text-center align-middle justify-center'>
			<div className='form-control'>
				<label className='cursor-pointer label'>
					<span className='label-text'>Remember me</span>
					<input
						type='checkbox'
						defaultChecked
						className='checkbox checkbox-info'
					/>
				</label>
				<label className='cursor-pointer label'>
					<span className='label-text'>Remember me</span>
					<input
						type='checkbox'
						defaultChecked
						className='checkbox checkbox-info'
					/>
				</label>
			</div>
		</div>
	);
};
