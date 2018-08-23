import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from "./ScrollToNext/ScrollToNext";
import SocialIcons from "./SocialIcons/SocialIcons";
import Nav from "./Nav/Nav";

const Landing = (props, context) => {
    const {theme: {bgPrimary, colorPrimary}} = context;

    return (
        <div style={{backgroundColor: bgPrimary}} className="landing-page">
            <Nav/>
            <main style={{color: colorPrimary}}>
                <div className="intro-wrapper">
                    <div className="intro-name">Nabil Mosharraf</div>
                    <div className="tagline">
                        Full stack Web Dev | Android Developer | UX Architect
                    </div>
                    <SocialIcons/>
                </div>
            </main>
            <ScrollToNext pageSelector=".about-page"/>
        </div>
    );
};

Landing.contextTypes = {
    theme: PropTypes.any
};

export default Landing;
