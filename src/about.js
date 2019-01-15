import React from 'react';
import Footer from './footer';

const About = () => (
  <div id="aboutSection">
    <div>
      <img id="aboutImg" src="../dist/images/Pixel_Art.jpg" alt="" />
    </div>
    <div id="aboutText">
      <h3>About Me:</h3>
      <h4>
        <b>
          Hi, I am Nolan Kuenzi. I am a front-end developer from the United States. <br /> I am
          passonate about software, the web, and emerging technologies. This site contains portfolio
          of projects that I have worked on.
        </b>
      </h4>
    </div>
    <Footer />
  </div>
);

export default About;
