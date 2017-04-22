import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default React.createClass ({
  render() {
    return (
      <div>

        <Paper style={{ padding: '80px', marginBottom: '8px' }}>
          <h1 className="text-center">Polls </h1>
          <h2 className="text-center">사람들이 만든 poll이 실시간으로 나와야함!!</h2>
          <Link to="/signup">
            <RaisedButton fullWidth={true} primary={true} label="회원가입" />
          </Link>
        </Paper>

        <Tabs className="no-main">

          <Tab label="Trending" icon={ <FontIcon className="material-icons">trending_up</FontIcon> }>
            <h3>Top trending Pulls</h3>
          </Tab>

          <Tab label="Popular" icon={<FontIcon className="material-icons">terrain </FontIcon>}>
            <h3>Popular Pulls</h3>
          </Tab>

          <Tab label="Latest" icon={<FontIcon className="material-icons">format_indent_increase </FontIcon>}>
            <h3>최근투d표 </h3>
          </Tab>
          

        </Tabs>

      </div>

    );
  }
});
