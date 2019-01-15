import React from 'react';

const Portfolio = () => (
  <div id="portfolioSection">
    <div className="portfolioSubText">
      <h4>Basic Projects:</h4>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/favoriteQuotes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/Favorite_Quotes.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Random Quote Generator</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/wikipediaViewer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/Wikipedia_Viewer.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Wikipedia Viewer App</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/basicCalculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/JavaScript_Calculator.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">JavaScript Calculator</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/pomodoroTimer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/Pomodoro_Timer.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Pomodoro Timer</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/ticTacToeV2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/Tic_Tac_Toe.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Tic-Tac-Toe Game</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/simonGame/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/Simon_Game.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Simon Game</h5>
        </a>
      </div>
    </div>
  </div>
);

export default Portfolio;
