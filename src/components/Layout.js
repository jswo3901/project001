import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import io from 'socket.io-client';



export default React.createClass({
  render() {
    let buttonStyle = {
      backgroundColor: 'transparent',
      color:'white'
    };

    console.log(this.props);

    return (
      <div>
         <AppBar title="설문조사" showMenuIconButton={false} iconElementRight={
          <div className="appbar-btn">
            <Link to="/">
              <FlatButton label="Home" style={buttonStyle} />
            </Link>
            <Link to="/signup">
              <FlatButton label="회원가입" style={buttonStyle} />
            </Link>
            <Link to="/signin">
              <FlatButton label="로그인" style={buttonStyle} />
            </Link>
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
