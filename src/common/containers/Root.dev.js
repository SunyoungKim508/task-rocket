import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from 'common/components/App';
import DevTools from './DevTools';

const Root = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
