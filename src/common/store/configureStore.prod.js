import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]

  const enhancer = compose(
    applyMiddleware(...middleware),
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  )

  return store
}
