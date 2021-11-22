import connect from '@frontity/connect'
import { Global, css } from 'frontity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import externalCss from './style/footer.css'

const Footer = () => {
	return (
		<>
			<footer>
				<div className="flex-container-footer">
					<div className="menus-wrapper">
						<ul>
							<li>Therapie & coaching</li>
							<li><a href="">Individuele therapie</a></li>
							<li><a href="">Relatietherapie</a></li>
							<li><a href="">Business coaching</a></li>
							<li><a href="">Trainingen / workshops</a></li>
						</ul>
						<ul>
							<li>Psycholoog Bloemendaal</li>
							<li><a href="">Werkwijze & tarieven</a></li>
							<li><a href="">Over mij</a></li>
							<li><a href="">Reviews</a></li>
						</ul>
						<ul>
							<li>En meer</li>
							<li><a href="">Blogs</a></li>
							<li><a href="">Koop een e-boek</a></li>
							<li><a href="">Bekijk mijn journalistieke producties</a></li>
							<li><a href="">In de media</a></li>
							<li><a href="">Huur mij in als journalist</a></li>
						</ul>
					</div>
					<div className="socials-wrapper">
						<h5>Volg mij op</h5>
						<div className="social-img-wrapper">
							<img src="https://raw.githubusercontent.com/DesignerTies/frontity-goed/5d4087fd228c6b3184607da47e103637f72d4187/packages/psycholooginbloemendaal/src/components/assets/instagram-icon.svg" alt="" />
							<img src="https://raw.githubusercontent.com/DesignerTies/frontity-goed/7eee0ef900fe27dcdb9d3e8aeed74d989924c275/packages/psycholooginbloemendaal/src/components/assets/facebook-icon.svg" alt="" /> 
							<img src="https://raw.githubusercontent.com/DesignerTies/frontity-goed/7eee0ef900fe27dcdb9d3e8aeed74d989924c275/packages/psycholooginbloemendaal/src/components/assets/linkedin-icon.svg" alt="" />
						</div>
						<ul>
							<li>Praktijk: Brederodelaan 54, 2061 KK Bloemendaal</li>
							<li>francisca@psycholooginbloemendaal.nl</li>
							<li>06-22413394</li>
						</ul>
					</div>
				</div>
					<h4 className="citate-footer">De dingen veranderen niet. <span>Wij veranderen.</span></h4>
					<p className="info-makers">Deze site is ontworpen door Willemijn van Hardeveld en gebouwd door Ties Hoenderdos</p>
			</footer>
			<Global styles={css(externalCss)} />
		</>
	)
}

export default connect(Footer)