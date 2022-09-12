import React from 'react';

export const Sorter = () => {
	return (
		<div class='btn-group'>
			<button
				type='button'
				className='btn btn-primary dropdown-toggle'
				data-mdb-toggle='dropdown'
				aria-expanded='false'
			>
				Right-aligned menu
			</button>
			<ul className='dropdown-menu dropdown-menu-end'>
				<li>
					<button className='dropdown-item' type='button'>
						Action
					</button>
				</li>
				<li>
					<button className='dropdown-item' type='button'>
						Another action
					</button>
				</li>
				<li>
					<button className='dropdown-item' type='button'>
						Something else here
					</button>
				</li>
			</ul>
		</div>
	);
};
