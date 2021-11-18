import connect from '@frontity/connect';
import React, { Component } from 'react';
import { ArcText } from '@arctext/react';

const RoundedDiv = () => {

	return (
		<div className="rounded-div">
			<img src="https://github.com/DesignerTies/frontity-goed/blob/f24bfba0ea41038e992a3c65f508cf8bdeb5875a/packages/psycholooginbloemendaal/src/components/assets/mama.png?raw=true" alt="over-mij-preview" className="foto-over-mij" />
			<div className="text-wrap">
				<h1>WELKOM</h1>
				<h2>Ik help je graag</h2>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusaminvidunt ut labore et  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusaminvidunt ut labore et dolore magna </p>
			</div>
		</div>
	)
}

export default connect(RoundedDiv)