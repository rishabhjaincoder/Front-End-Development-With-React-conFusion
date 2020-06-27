import React,{ Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

// this is class based component
class App extends Component {
  
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}


export default App;
