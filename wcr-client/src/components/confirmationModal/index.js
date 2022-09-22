import React from 'react';

export const ConfirmModal = ({ title, text, show }) => {
	return (
		<div
			class='modal right fade'
			id='exampleModal'
			tabindex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden={show}
			data-mdb-backdrop='true'
			data-mdb-keyboard='true'
		>
			<div class='modal-dialog modal-side modal-top-right  modal-dialog-centered'>
				<div class='modal-content'>
					<div class='modal-header'>
						<h5 class='modal-title' id='exampleModalLabel'>
							{title}
						</h5>
						<button
							type='button'
							class='btn-close'
							data-mdb-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div class='modal-body'>...</div>
					<div class='modal-footer'>
						<button
							type='button'
							class='btn btn-secondary'
							data-mdb-dismiss='modal'
						>
							{text}
						</button>
						<button type='button' class='btn btn-primary'>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
