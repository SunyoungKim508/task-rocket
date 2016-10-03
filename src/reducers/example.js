import * as EXAMPLE_ACTIONS from '../constants/example';

export default function todos(state = [], action) {
  switch (action.type) {
    case EXAMPLE_ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}
