import React, { Component, PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.task.text}
        leftCheckbox={<Checkbox />}
      />
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
