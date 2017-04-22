import React from 'react';
import ReactDOM from 'react-dom';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRoutes from './components/AppRoutes';



window.onload = () => {
  ReactDOM.render (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AppRoutes />
    </MuiThemeProvider>,document.getElementById('container'));
};
