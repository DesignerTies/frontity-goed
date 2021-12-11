import connect from "@frontity/connect"
import {Global, css} from "frontity"
import externalCss from "../style/tc-page.css"
import TCPosts from "./tc-posts"
import BannerTC from "./banner"

const TcPage = () => {
	return (
		<>
			<BannerTC />
			<div className="tc-wrapper">
				<TCPosts />
			</div>
			<p id="citate-tc">
				'You can't go back and change the beginning,
				but you can start where you are
				and change the ending' 
			</p>
			<Global styles={css(externalCss)} />
		</>
		
	)
}

export default connect(TcPage)