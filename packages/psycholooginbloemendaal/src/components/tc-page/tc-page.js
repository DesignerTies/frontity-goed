import connect from "@frontity/connect"
import {Global, css} from "frontity"
import externalCss from "../style/tc-page.css"
import TCPosts from "./tc-posts"

const TcPage = () => {
	return (
		<>
			<div className="tc-wrapper">
				<TCPosts />
			</div>
			<Global styles={css(externalCss)} />
		</>
		
	)
}

export default connect(TcPage)