import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    return (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'thetekton'
        }}
        options={{
          username: 'TheTekton',
          height: '400'
        }}
        onLoad={() => console.log('Twitter timeline loaded...')}
      />
    );
  }
}

export default App;
