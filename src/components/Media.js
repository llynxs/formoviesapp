import React from 'react';

const Media = ({ media }) => (
	<div className="single-item__video-frames">
		<h2 className="single-item__video-header">Media</h2>
		<div className="single-item__video-frames__content">
			{
				media ?
				<iframe
					src={`http://www.youtube.com/embed/${media.key}`}
					frameBorder='0'
					className="single-item__video-frames__item__frame"
					allowFullScreen
				></iframe>
				: null
			}
		</div>
	</div>
)

export default Media;
