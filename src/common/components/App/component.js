import React, { PropTypes } from 'react';

import cssModules from 'react-css-modules';
import styles from './component.css';

const App = (props) => {
  const { onClick, onIncrementAsync, onIncrement } = props;

  return (
    <div styleName="wrapper">
      <div>hello</div>

      <button onClick={onClick}>click</button>

      <button onClick={onIncrementAsync}>Async click</button>

      <button onClick={onIncrement}>Sync click</button>
    </div>
  );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default cssModules(App, styles);
