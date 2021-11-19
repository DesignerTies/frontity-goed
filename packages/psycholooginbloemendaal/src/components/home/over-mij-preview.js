import connect from "@frontity/connect"

const OverPreview = () => {
	return (
		<div className="over-wrapper">
			<div className="over-inner-wrapper">
				<div className="over-text-wrapper">
					<h2>OVER MIJ</h2>
					<h4 className="name-over-preview">FRANCISCA KRAMER</h4>
					<h4>MSC NIP PSYCHOLOOG</h4>
					<p>Ik ben een psycholoog uit Bloemendaal met Urker wortels stevig in mij verankerd. Ik wil mensen meer vrijheid laten ervaren en beter leren omgaan met emoties.</p>
					<a href="">Lees meer</a>
				</div>
				<img src="https://github.com/DesignerTies/frontity-goed/blob/25b0fe5800163c614366a942ac2edd486c989e3e/packages/psycholooginbloemendaal/src/components/assets/over-mij-preview-homepage.png?raw=true" alt="" />
			</div>
		</div>
	)
}

export default connect(OverPreview)