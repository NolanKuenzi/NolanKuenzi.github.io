/* eslint-disable */
import React from 'react';

class MessageMe extends React.Component {
  //submit = () => {};

  render() {
    return (
      <div id="messageDiv">
        <div id="messageDivHeader">
          <h3>Message Me:</h3>
        </div>
        <form>
          <div>
            <input id="contactName" className="contactSecAttr" placeholder="Your Name" disabled /> <br />
            <input id="contactEmail" className="contactSecAttr" placeholder="Your Email" disabled />
          </div>
          <div id="textAreaInputDiv">
            <textarea id="textAreaInput" className="contactSecAttr" placeholder="Message" disabled />
          </div>
          <div>
            <button id="submitButton" className="contactSecAttr" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const Contact = () => (
  <div>
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
          <img id="LinkedIn_Icon" className="iconImg" src="./dist/images/LinkedIn_icon.svg" alt="" />
        </a>
        <a href="mailto:mr.nolank@gmail.com" id="gMail" target="_blank" rel="noopener noreferrer">
          <img id="gMailIcon" className="iconImg" src="./dist/images/Gmail_Icon.png" alt="" />
        </a>
        <a href="https://medium.com/@mr.nolank" id="medium" target="_blank" rel="noopener noreferrer">
          <img id="mediumIcon" className="iconImg" src="./dist/images/Medium_Logo.svg" alt="" />
        </a>
      </div>
    </div>
    <div>
      <MessageMe />
    </div>
    <div id="commingSoon">
      <h2 id="commingSoonText">Feature Comming Soon</h2>
    </div>
  </div>
);
export default Contact;
