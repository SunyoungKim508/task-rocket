import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from 'common/store/configureStore';
import RootContainer from 'common/containers/Root';

const store = configureStore();

const App = (
  <AppContainer>
    <RootContainer
      store={store}
    />
  </AppContainer>
);

const rootEl = document.getElementById('root');

render(App, rootEl);

if (module.hot) {
  module.hot.accept('common/containers/Root', () => {
    render(App, rootEl);
  });
}
