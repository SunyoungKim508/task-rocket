import { connect } from 'react-redux'
import component from './component'
import { addTodo } from '../../actions/example'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      const text = 'yoyoyo'
      dispatch(addTodo(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
