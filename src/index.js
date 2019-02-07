import React from 'react';
import ReactDOM from 'react-dom';
import './myStyles.scss';
import Main from './main';

const App = () => (
  <div>
    <Main />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
