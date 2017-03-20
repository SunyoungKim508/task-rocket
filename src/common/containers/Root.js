import ProdRoot from './Root.prod';
import DevRoot from './Root.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = ProdRoot;
} else {
  module.exports = DevRoot;
}
