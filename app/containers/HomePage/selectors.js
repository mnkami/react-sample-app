/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectTasks = () => createSelector(
  selectHome,
  (homeState) => homeState.get('data').toJS()
);

const makeSelectOrder = () => createSelector(
  selectHome,
  (homeState) => ({
    order: homeState.get('order'),
    orderBy: homeState.get('orderBy'),
  })
);

const makeSelectSelected = () => createSelector(
  selectHome,
  (homeState) => homeState.get('selected').toJS()
);

const makeSelectShowAddRow = () => createSelector(
  selectHome,
  (homeState) => homeState.get('showAddRow')
);

export {
  selectHome,
  makeSelectTasks,
  makeSelectOrder,
  makeSelectSelected,
  makeSelectShowAddRow
};
