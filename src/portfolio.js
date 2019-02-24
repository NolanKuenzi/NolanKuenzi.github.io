import React from 'react';

const Portfolio = () => (
  <div id="portfolioSection">
    <div id="portfolioTitle">
      <h3>Portfolio:</h3>
    </div>
    <div id="portfolioDescription">
      <h4 id="portfolioDescriptionText">
        Click on any of the thumbnail images to view the full project. Click on the GitHub icon
        below to see the code.
      </h4>
      <a href="https://github.com/NolanKuenzi" id="gHub" target="_blank" rel="noopener noreferrer">
        <img src="./dist/images/GH_icon.png" alt="" />
        <h5 className="thumbnailText">GitHub</h5>
      </a>
    </div>
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
          <img src="./dist/images/Favorite_Quotes.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Random Quote Generator</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/wikipediaViewer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Wikipedia_Viewer.png" className="thumbnailImg" alt="" />
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
          <img src="./dist/images/JavaScript_Calculator.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">JavaScript Calculator</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/pomodoroTimer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Pomodoro_Timer.png" className="thumbnailImg" alt="" />
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
          <img src="./dist/images/Tic_Tac_Toe.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Tic-Tac-Toe Game</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/simonGame/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Simon_Game.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Simon Game</h5>
        </a>
      </div>
    </div>
    <div className="portfolioSubText">
      <h4>React Projects:</h4>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a href="https://nolankuenzi.github.io/todoApp/" target="_blank" rel="noopener noreferrer">
          <img src="./dist/images/Todo_App.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Todo-List App</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/reactCalculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/React_Calculator.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">React Calculator</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/markdownPreviewer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../dist/images/Markdown_Previewer.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Markdown Previewer</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/drumMachine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Drum_Machine.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Drum Machine</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/recipeBox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Recipe_Box.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Recipe Box App</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/localWeather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Local_Weather.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Local Weather App</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/pokemonHabitats/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Pokemon_Habitats.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Pokémon Habitats</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/emojiSearch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Emoji_Search.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Emoji Search</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/topTwitchStreams/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Top_Twitch_Streams.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Top Twitch Streams</h5>
        </a>
      </div>
    </div>
    <div className="portfolioSubText">
      <h4>Data Visualization Projects:</h4>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/d3BarChart/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Bar_Chart.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Bar Chart</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/d3Scatterplot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Scatterplot_Graph.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Scatterplot Graph</h5>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/d3HeatMap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Heat_Map.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Heat Map</h5>
        </a>
      </div>
      <div className="imgDiv">
        <a
          href="https://nolankuenzi.github.io/d3ChoroplethMap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./dist/images/Choropleth_Map.png" className="thumbnailImg" alt="" />
          <h5 className="thumbnailText">Choropleth Map</h5>
        </a>
      </div>
    </div>
  </div>
);

export default Portfolio;
