import React from 'react';
import { connect } from 'frontity';

const Form = ({ state, libraries }) => {

    const data = state.source.get("/contact-form");
    const Form = state.source.page[data.id];
    const Html2react = libraries.html2react.Component;

    return (
        <div className="form">
            <Html2react html={Form.content.rendered} />
        </div>
        
    )
}

export default connect(Form)