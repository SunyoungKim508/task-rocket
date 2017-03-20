import { connect } from 'react-redux';
import { addTodo, incrementAsync, increment } from 'common/actions/example';
import component from './component';

const mapStateToProps = (state) => { // state, ownProps
  console.log('state', state);
  return {
  };
};

// dispatch, ownProps
const mapDispatchToProps = dispatch => ({
  onClick: () => {
    const text = 'yoyoyo';
    dispatch(addTodo(text));
    dispatch(addTodo('blablacbla'));
  },
  onIncrementAsync: () => {
    dispatch(incrementAsync());
  },
  onIncrement: () => {
    dispatch(increment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
