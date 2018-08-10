/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { ADD_TASK, SORT, SELECTED, SELECTED_ALL, DELETE_TASKS, SHOW_ADD_ROW } from './constants';

export function changeUsername(payload) {
  return {
    type: ADD_TASK,
    payload
  };
}

export function sort(payload) {
  return {
    type: SORT,
    payload
  };
}

export function selected(id) {
  return {
    type: SELECTED,
    id
  };
}

export function selectedAll(checked) {
  return {
    type: SELECTED_ALL,
    checked
  };
}

export function deleteTasks() {
  return {
    type: DELETE_TASKS
  };
}

export function showAddTaskRow() {
  return {
    type: SHOW_ADD_ROW
  };
}

export function showAddTaskRowAsync() {
  return dispatch => {
    setTimeout(() => dispatch(showAddTaskRow()), 3000);
  };
}

