import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Task from './Task.jsx';
import GoogleMap from './GoogleMap.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Click!");
  }

  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="map-holder">
            <div className="row">
              <div className="col-md-12">
                <AppBar
                  title="Todo List"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
              </div>
            </div>
            <div className="row map-row">
              <div className="col-md-4">
                <h1>Material-UI</h1>
                <List>
                  <Subheader>Today</Subheader>
                  {this.renderTasks()}
                </List>
              </div>
              <div className="col-md-8 map-col">
                <GoogleMap />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FlatButton label="Default" />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
