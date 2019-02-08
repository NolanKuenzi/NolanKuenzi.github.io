import React from 'react';

class MessageMe extends React.Component {
  submit = () => {
    console.log('egg');
  };

  render() {
    return (
      <div id="messageDiv">
        <div id="messageDivHeader">
          <h3>Message Me:</h3>
        </div>
        <form>
          <div>
            <input id="contactName" className="contactSecAttr" placeHolder="Your Name" /> <br />
            <input id="contactEmail" className="contactSecAttr" placeHolder="Your Email" />
          </div>
          <div id="textAreaInputDiv">
            <textarea id="textAreaInput" className="contactSecAttr" placeHolder="Message" />
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
          <img id="LinkedIn_Icon" src="./dist/images/LinkedIn_icon.svg" alt="" />
        </a>
        <a href="mailto:mr.nolank@gmail.com" id="gMail" target="_blank" rel="noopener noreferrer">
          <img id="gMailIcon" src="./dist/images/Gmail_Icon.png" alt="" />
        </a>
      </div>
    </div>
    <div id="messageContainer">
      <MessageMe />
    </div>
  </div>
);
export default Contact;
