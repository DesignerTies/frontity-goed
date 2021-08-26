import React from 'react';
import { Global, css } from 'frontity'; 
import externalCss from '../style/home.css'
import { connect, styled } from 'frontity';
import Banner from './banner'
import Form from './form'

const Home = () => {

    return (
        <>
            <div className="flex-div">
                <Banner> 
                </Banner>
                <Form />
            </div>
            <Global styles={css(externalCss)} />
        </>
    )
}

export default connect(Home)
