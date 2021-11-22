import React from 'react';
import { Global, css } from 'frontity'; 
import externalCss from '../style/home.css'
import { connect, styled } from 'frontity';
import Banner from './banner'
import RoundedDiv from './circle-text'
import TcHome from './tc-home';
import Reviews from './reviews';
import OverPreview from  "./over-mij-preview";
import WerkwijzePrev from './werkwijze'
import MeerPreview from './meer'
import Form from './form'

const Home = () => {

    return (
        <>
            <div className="flex-div">
                <Banner> 
                </Banner>
                <RoundedDiv />
                <TcHome /> 
                <Reviews />
                <OverPreview />
                <WerkwijzePrev />
                <MeerPreview />
                {/* <Form /> */}
            </div>
            <Global styles={css(externalCss)} />
        </>
    )
}

export default connect(Home)
