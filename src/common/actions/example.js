import * as EXAMPLE_ACTIONS from 'common/constants/example';

/*
 * action creators
 */

export function addTodo(text) {
  return { type: EXAMPLE_ACTIONS.ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: EXAMPLE_ACTIONS.TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: EXAMPLE_ACTIONS.SET_VISIBILITY_FILTER, filter };
}

export function incrementAsync() {
  return { type: EXAMPLE_ACTIONS.INCREMENT_ASYNC };
}

export function increment() {
  return { type: EXAMPLE_ACTIONS.INCREMENT };
}
