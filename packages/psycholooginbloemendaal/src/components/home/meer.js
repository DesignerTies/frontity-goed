import connect from '@frontity/connect'

const MeerPreview = () => {
	return (
		<div className="meer-wrapper">
			<h2 className="meer-title">EN MEER...</h2>
			<div className="meer-inner-wrapper">
				<div className="media-prev inside-inner-wrapper-div">
					<div className="prev-text-wrapper">
						<h4>IN DE MEDIA</h4>		
						<p>Naast het zijn van psycholoog heb ik ook een journalistieke achtergrond. Regelmatig schrijf ik artikelen voor diverse magazines. Wil je mijn als journalist inschakelen, neem dan contact op.
						</p>
						<a href="">Lees meer</a>
					</div>					
					<div className="prev-img-wrapper">
						<img id="media-prev-img" src="https://live.staticflickr.com/65535/51696707569_bb73de1ddb_b.jpg" alt="journalistieke producties preview" />
					</div>	
				</div>
				<div className="blog-prev inside-inner-wrapper-div">
					<div className="prev-text-wrapper">
						<h4>BLOG</h4>
						<p>Naast het zijn van psycholoog heb ik ook een journalistieke achtergrond. Regelmatig schrijf ik artikelen voor diverse magazines. Wil je mijn als journalist inschakelen, neem dan contact op.
						</p>	
						<a href="">Lees meer</a>
					</div>					
					<div className="prev-img-wrapper">
						<img id="blog-prev-img" src="https://live.staticflickr.com/65535/51696707569_bb73de1ddb_b.jpg" alt="blog preview" />
					</div>
				</div>
				<div className="journ-prod-prev inside-inner-wrapper-div">
					<div className="prev-text-wrapper">
						<h4 className="title-journ-prod">JOURNALISTIEKE PRODUCTIES</h4>
						<p>Naast het zijn van psycholoog heb ik ook een journalistieke achtergrond. Regelmatig schrijf ik artikelen voor diverse magazines. Wil je mijn als journalist inschakelen, neem dan contact op.
						</p>
						<a href="">Lees meer</a>
					</div>
					<div className="prev-img-wrapper">					
						<img id="journ-prod-prev-img" src="https://live.staticflickr.com/65535/51696707569_bb73de1ddb_b.jpg" alt="in de media preview" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(MeerPreview)