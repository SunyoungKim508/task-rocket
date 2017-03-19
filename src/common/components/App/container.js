import { connect } from 'react-redux'
import component from './component'
import { addTodo, incrementAsync, increment } from 'common/actions/example'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      const text = 'yoyoyo'
      dispatch(addTodo(text))
      dispatch(addTodo('blablacbla'))
    },
    onIncrementAsync: () => {
      dispatch(incrementAsync())
    },
    onIncrement: () => {
      dispatch(increment())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
