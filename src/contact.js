import React from 'react';

class MessageMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      border: false,
    };
  }

  handleChange = event => {
    if (event.target.id === 'contactName') {
      this.setState({
        name: event.target.value,
      });
    }
    if (event.target.id === 'contactEmail') {
      this.setState({
        email: event.target.value,
      });
    }
    if (event.target.id === 'contactMessage') {
      this.setState({
        message: event.target.value,
      });
    }
  };

  submit = () => {
    const destructProps = this.state;
    if (destructProps.name === '' || destructProps.email === '' || destructProps.message === '') {
      this.setState({
        border: true,
      });
      alert('Please complete all required fields.');
      return;
    }
    this.setState({
      name: '',
      email: '',
      message: '',
      border: false,
    });
  };

  render() {
    const destructProps = this.state;
    return (
      <div id="messageDiv">
        <div id="messageDivHeader">
          <h3>Message Me:</h3>
        </div>
        <form onSubmit={this.submit}>
          <div>
            <div id="nameLabel" className="labels">
              <h4>Name:</h4>
            </div>
            <input
              className="contactSecAttr"
              id="contactName"
              placeholder="Your Name"
              onChange={this.handleChange}
              value={destructProps.name}
              style={
                destructProps.border === false || destructProps.name !== ''
                  ? { border: '4px solid black' }
                  : { border: '4px solid red' }
              }
              disabled
            />
            <br />
            <div id="emailLabel" className="labels">
              <h4>Email:</h4>
            </div>
            <input
              className="contactSecAttr"
              id="contactEmail"
              placeholder="Your Email"
              onChange={this.handleChange}
              value={destructProps.email}
              style={
                destructProps.border === false || destructProps.email !== ''
                  ? { border: '4px solid black' }
                  : { border: '4px solid red' }
              }
              disabled
            />
          </div>
          <div id="messageLabel" className="labels">
            <h4>Message:</h4>
          </div>
          <textarea
            className="contactSecAttr"
            id="contactMessage"
            placeholder="Message"
            onChange={this.handleChange}
            value={destructProps.message}
            style={
              destructProps.border === false || destructProps.message !== ''
                ? { border: '4px solid black' }
                : { border: '4px solid red' }
            }
            disabled
          />
          <div>
            <button id="submitButton" className="contactSecAttr" type="submit" disabled>
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
          <img
            id="LinkedIn_Icon"
            className="iconImg"
            src="./dist/images/LinkedIn_icon.svg"
            alt=""
          />
        </a>
        <a href="mailto:mr.nolank@gmail.com" id="gMail" target="_blank" rel="noopener noreferrer">
          <img id="gMailIcon" className="iconImg" src="./dist/images/Gmail_Icon.png" alt="" />
        </a>
        <a
          href="https://medium.com/@mr.nolank"
          id="medium"
          target="_blank"
          rel="noopener noreferrer"
        >
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
