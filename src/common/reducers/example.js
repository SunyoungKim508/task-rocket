import * as EXAMPLE_ACTIONS from 'common/constants/example';

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
    case EXAMPLE_ACTIONS.INCREMENT:
      const num = 'yay'
      return [
        ...state,
        num,
      ]
    default:
      return state
  }
}
