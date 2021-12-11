import connect from "@frontity/connect"
import WerkwijzePosts from "./werkwijzePosts"


const WerkwijzePage = () => {
	return (
		<div className="werkwijze-page-wrapper">
			<WerkwijzePosts />
			<div className="pictures-wrapper">
				<img src="https://live.staticflickr.com/65535/51739538261_214277f134_b.jpg" alt="werkwijze en tarieven foto" />
				<img src="https://live.staticflickr.com/65535/51740178309_5d3bc2b75f_b.jpg" alt="werkwijze en tarieven foto" />
			</div>
		</div>
	)
}

export default connect(WerkwijzePage)