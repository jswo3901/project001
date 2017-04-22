import React from 'react';
import AppBar from 'material-ui/AppBar';

export default React.createClass({
  render() {
    return (
      <div>
        <AppBar title="설문조사" />
        {this.props.children}
      </div>
    );
  }
});
