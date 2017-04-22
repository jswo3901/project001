import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';




export default React.createClass({
  render() {
    let buttonStyle = {
      backgroundColor: 'transparent',
      color:'white'
    };

    return (
      <div>
         <AppBar title="설문조사112211" showMenuIconButton={false} iconElementRight={
          <div className="appbar-btn">
            <FlatButton label="회원가입" style={buttonStyle} />
            <FlatButton label="로그인" style={buttonStyle} />
          </div>
        }>
        </AppBar>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
});
