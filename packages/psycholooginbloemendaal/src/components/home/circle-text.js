import connect from '@frontity/connect';
import React, { Component } from 'react';
import { ArcText } from '@arctext/react';

const RoundedDiv = () => {

	return (
		<div className="rounded-div">
			<ArcText className="curved-text" text="Psycholoog Bloemendaal" radius={200} characterWidth={5} />
			<p>Francisca Kramer MSc Psycholoog</p>
		</div>
	)
}

export default connect(RoundedDiv)