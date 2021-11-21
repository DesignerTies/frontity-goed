import connect from "@frontity/connect"

const WerkwijzePrev = () => {
	return (
		<div className="werkwijze-outer-wrapper">
			<div className="werkwijze-inner-wrapper">
				<h2>HOE GA IK TE WERK?</h2>
				<h4>WERKWIJZE EN TARIEVEN</h4>
				<div className="werkwijze-picture-wrapper">
					<img src="https://github.com/DesignerTies/frontity-goed/blob/4c8c570ddde904474264f545ef8ab94c77580026/packages/psycholooginbloemendaal/src/components/assets/foto-werkplek-1.png?raw=true" alt="" />
					<img src="https://github.com/DesignerTies/frontity-goed/blob/4c8c570ddde904474264f545ef8ab94c77580026/packages/psycholooginbloemendaal/src/components/assets/foto-werkplek-2.png?raw=true" alt="" />
					<img src="https://raw.githubusercontent.com/DesignerTies/frontity-goed/4c8c570ddde904474264f545ef8ab94c77580026/packages/psycholooginbloemendaal/src/components/assets/foto-werkplek-buiten.png" alt="" />
				</div>
				<div className="werkwijze-tarieven-text-wrapper">
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusaminvidunt ut labore et dolore magna </p>
				</div>
				<a href="">Lees meer</a>
			</div>
		</div>
	)
}

export default connect(WerkwijzePrev)