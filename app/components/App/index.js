import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './index.less';

class App extends Component {
  render(){
    return (
      <div className="app wrapper">
        <div className="img"></div>
        <div className="tip"></div>
        <spfan className="glyphicon glyphicon-asterisk icon-pos"></spfan>
      </div>
    );
  }
}

export default App;
