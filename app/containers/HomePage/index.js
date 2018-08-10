import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectTasks,
  makeSelectOrder,
  makeSelectSelected,
  makeSelectShowAddRow
} from './selectors';
import { 
  changeUsername,
  sort,
  selectedAll,
  selected,
  deleteTasks,
  showAddTaskRowAsync
} from './actions';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onAddTask: (evt) => dispatch(changeUsername(evt.target.value)),
  onSort: (payload) => dispatch(sort(payload)),
  onSelected: (id) => dispatch(selected(id)),
  onSelectedAll: (checked) => dispatch(selectedAll(checked)),
  onDelete: () => dispatch(deleteTasks()),
  onAdd: () => dispatch(showAddTaskRowAsync()),
});

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
  order: makeSelectOrder(),
  selected: makeSelectSelected(),
  showAddRow: makeSelectShowAddRow()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(HomePage);
export { mapDispatchToProps };
