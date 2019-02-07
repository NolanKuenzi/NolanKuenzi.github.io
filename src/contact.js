import React from 'react';

const Contact = () => (
  <div id="contactSection">
    <div>
      <h4>Contact Me:</h4>
    </div>
    <div id="contactIcons">
      <a
        href="https://www.linkedin.com/in/nolan-kuenzi-07770473/"
        id="linkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="LinkedIn_Icon" src="./dist/images/LinkedIn_icon.svg" alt="" />
      </a>

      <a href="mailto:mr.nolank@gmail.com" id="gMail" target="_blank" rel="noopener noreferrer">
        <img id="gMailIcon" src="./dist/images/Gmail_Icon.png" alt="" />
      </a>
    </div>
  </div>
);
export default Contact;
