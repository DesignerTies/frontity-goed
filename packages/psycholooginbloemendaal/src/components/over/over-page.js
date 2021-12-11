import connect from "@frontity/connect"
import {Global, css} from "frontity"
import OverPosts from "./over-post"
import externalCss from "../style/over-page.css"

const OverPage = () => {
	return (
		<>
			<div className="banner-over-page" role="img">
				<div className="title-over-page">
					<h1>OVER MIJ</h1>
				</div>
			</div>
			<div className="flex-over-wrapper">
				<div className="img-over-page" role="img" />
				<OverPosts />
				<div className="text-wrapper-over-page">
					<p>Quote QuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuote QuoteQuote QuoteQuoteQuoteQuote QuoteQuoteQuoteQuote QuoteQuoteQuoteQuoteQuoteQuote</p>
				</div>
			</div>
			<Global styles={css(externalCss)} />
		</>
	)
}

export default connect(OverPage)