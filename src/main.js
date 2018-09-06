import React from 'react';
import ReactDOM from 'react-dom';
import InfoPanel from 'Components/InfoPanel';
import './Components/App.scss'

const root = document.getElementById('root');

ReactDOM.render(
  <InfoPanel>
    Hello World
  </InfoPanel>
, root)
