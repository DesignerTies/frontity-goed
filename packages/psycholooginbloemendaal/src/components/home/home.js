import React from 'react';
import { Global, css } from 'frontity'; 
import externalCss from '../style/home.css'
import { connect, styled } from 'frontity';
import Banner from './banner'
import RoundedDiv from './circle-text'
import TcHome from './tc-home';
import Form from './form'

const Home = () => {

    return (
        <>
            <div className="flex-div">
                <Banner> 
                </Banner>
                <RoundedDiv />
                <TcHome />
                
                {/* <Form /> */}
            </div>
            <Global styles={css(externalCss)} />
        </>
    )
}

export default connect(Home)
