import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit}) => {
	return (
		<div className='pa2 m3 mt0'>
			<p className='f3'>
			{'This Magic Brain will detect faces in your pictures, Give it a Try'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-75 center' type='text'onChange= {onInputChange} />
				<button className='w-25 grow f4 link ph3 pv2 dib black bg-green' onClick= {onSubmit}>Detect</button>
			</div>
			</div>
		</div>
		)
}

export default ImageLinkForm;