import ProdConfigureStore from './configureStore.prod';
import DevConfigureStore from './configureStore.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = ProdConfigureStore;
} else {
  module.exports = DevConfigureStore;
}
