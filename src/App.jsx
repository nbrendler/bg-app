import React, {Component} from 'react';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>It works!</h1>
        {this.props.children}
      </div>
    );
  }
}
