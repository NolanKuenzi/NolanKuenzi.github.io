import React from 'react';
import ReactDOM from 'react-dom';
import './myStyles.scss';
import ReactRouter from './router';

const App = () => (
  <div>
    <ReactRouter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
