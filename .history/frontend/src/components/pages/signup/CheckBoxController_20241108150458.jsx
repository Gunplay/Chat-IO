import React from 'react';

export const CheckBoxController = () => {
	return (
		<div className='flex'>
			<div className='form-control'></div>
			<label className={`label gap-2 cursor-pointer`}>
				<span className='label-text'>Male</span>
				<input type='checkbox' className='checkbox border-slate-900'></input>
			</label>
		</div>
	);
};
