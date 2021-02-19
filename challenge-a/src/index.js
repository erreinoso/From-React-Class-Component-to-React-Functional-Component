import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleHooks from './ToggleHooks';
import ToggleProps from './ToggleProps';

ReactDOM.render(
  <React.StrictMode>
      <ToggleHooks />
      <ToggleProps />

  </React.StrictMode>,
  document.getElementById('root')
);

