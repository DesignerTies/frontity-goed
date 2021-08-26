import React from "react";
import { connect } from "frontity";
import CatTest from "./category-test"

const Kaas = () => {
	return (
		<div className="kaas-page">
			<CatTest />
		</div>
	)
}

export default connect(Kaas)