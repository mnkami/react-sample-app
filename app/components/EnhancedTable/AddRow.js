import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import moment from 'moment';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  }
});

class AddRow extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      asignee: ''
    };
  }

  handleSubmit() {
    // send new item if validation ok
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {classes} = this.props;

    return (<TableRow
      hover
      tabIndex={-1}
    >
    <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
      >
        <TableCell padding="checkbox">
          <Button variant="fab" mini color="secondary" aria-label="Add">
            <AddIcon />
          </Button>
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          <TextValidator
            id="taskName"
            name="taskName"
            label="Name"
            margin="normal"
            value={this.state.taskName}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </TableCell>
        <TableCell>
          <TextField
            id="description"
            label="Description"
            margin="normal"
          />
        </TableCell>
        <TableCell>Me</TableCell>
        <TableCell>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="asignee">
              Asignee
            </InputLabel>
            <Select
              value={this.state.asignee}
              onChange={this.handleChange}
              input={<Input name="asignee" id="asignee" />}
              displayEmpty
              name="asignee"
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Unassigned</em>
              </MenuItem>
              <MenuItem value={1}>Sam Ian</MenuItem>
              <MenuItem value={2}>Ben Lee</MenuItem>
              <MenuItem value={3}>John Bru</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell>
          <TextField
            id="duedate"
            label="Due date"
            type="date"
            defaultValue={moment().add(1, 'days').format('YYYYY-MM-DD')}
            InputLabelProps={{
              shrink: true,
            }}
        />
        </TableCell>
        <TableCell>
          <FormControl className={classes.formControl}>
            <Select
              value={this.state.status}
              onChange={this.handleChange}
              name="status"
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="" disabled>
                Status
              </MenuItem>
              <MenuItem value={'TO_DO'}>To Do</MenuItem>
              <MenuItem value={'IN_PROGRESS'}>In Progress</MenuItem>
              <MenuItem value={'DONE'}>Done</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        </ValidatorForm>
    </TableRow>);
  }
}

export default withStyles(styles)(AddRow);