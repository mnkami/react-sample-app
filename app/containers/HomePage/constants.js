/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_TASK = 'EnhancedTable/ADD_TASK';
export const SORT = 'EnhancedTable/SORT';
export const SELECTED_ALL = 'EnhancedTable/SELECTED_ALL';
export const SELECTED = 'EnhancedTable/SELECTED';
export const DELETE_TASKS = 'EnhancedTable/DELETE_TASKS';
export const SHOW_ADD_ROW = 'EnhancedTable/SHOW_ADD_ROW';
