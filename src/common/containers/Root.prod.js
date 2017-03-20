import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';

const Root = (props) => {
  const { store } = props;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
