import React from "react"
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import Landing from "../components/landing";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import Footer from "../components/Footer/Footer";

import '../styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';

import ParallaxBackground from "../components/ParallaxBackground/ParallaxBackground";

export default () => (
    <div className="dev-landing-page">
        <ThemeSwitcher>
            <ParallaxBackground />
            <Landing />
            <About />
            <Contact />
            <Portfolio />
            <ScrollTop />
            <Footer />
        </ThemeSwitcher>
    </div>
)