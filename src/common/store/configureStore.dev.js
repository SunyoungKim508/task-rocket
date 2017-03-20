import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from 'common/reducers';
import DevTools from 'common/containers/DevTools';

import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
// import createLogger from 'redux-logger'

import rootSaga from 'common/sagas';

export default function configureStore(initialState) {
  // const logger = createLogger()
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);
  const devTool = DevTools.instrument();
  const devState = persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/));

  const enhancer = compose(middleware, devTool, devState);
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('common/reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
