/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { 
  ADD_TASK,
  SORT,
  SELECTED, 
  SELECTED_ALL, 
  DELETE_TASKS, 
  SHOW_ADD_ROW
} from './constants';

let counter = 1;
function createData(name, description, author, asignee, duedate, status) {
  counter += 1;
  return { id: counter, name, description, author, asignee, duedate, status };
}

function comparator(a, b) {
  if (typeof a === 'string') {
    return b.localeCompare(a);
  }
  return a - b;

}
function getSorting(order, orderBy) {
  return order === 'desc' ? 
    (a, b) => comparator(b.get(orderBy), a.get(orderBy)) : 
    (a, b) => comparator(a.get(orderBy), b.get(orderBy));
}

// The initial state of the App
const initialState = fromJS({
  showAddRow: false,
  order: 'asc',
  orderBy: 'duedate',
  selected: [],
  data: [
    createData('Task #1', 'TBD', 'John', 'Lisa', new Date('2018-09-03'), 'Done'),
    createData('Task #2', 'something...', 'John', 'Brian', new Date('2018-08-22'), 'In Progress'),
  ],
  page: 0,
  rowsPerPage: 5,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return state.data.insert('username', action.payload);
    case SORT:
      const { order, orderBy } = action.payload;
      const updatedData = state.update('data', (list) => {
        return list.sort(getSorting(order, orderBy));
      });
      return updatedData.merge({ order, orderBy });
    case SELECTED:
      let selected = state.get('selected').toJS();
      const selectedIndex = state.get('selected').indexOf(action.id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, action.id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      return state.update('selected', () => fromJS(newSelected));
    case SELECTED_ALL:
      if (action.checked) {
        return state.update('selected', () => state.get('data').map(n => n.get('id')));
      }
      return state.update('selected', (v) => v.clear());
    case SHOW_ADD_ROW:
      return state.update('showAddRow', () => true);  
    case DELETE_TASKS:
      const selectedItems = state.get('selected');
      if (selectedItems) {
        const updatedStore = state.update('selected', (v) => v.clear());  
        return updatedStore.update('data', (tasks) => {
          return tasks.filter((val) => {
            return !selectedItems.includes(val.get('id'));
          });
        });
      }
    default:
      return state;
  }
}

export default homeReducer;
