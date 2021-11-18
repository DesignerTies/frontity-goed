import connect from '@frontity/connect';
import React from 'react';
import TCpPosts from './tc-posts'

const TcHome = () => {
	return (
		<div className="tc-outer-container">
			<h4 className="how-help">Hoe kan ik je helpen?</h4>
			<h4 className="ther-coach">THERAPIE & COACHING</h4>
			<TCpPosts />
		</div>
	)
}

export default connect(TcHome)