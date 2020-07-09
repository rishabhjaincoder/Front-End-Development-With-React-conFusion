import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
// after using BrowserRouter here outside the jsx code below, our application is now configured to make use of react-router
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// this Provider will make sure that the redux store is available to all the components
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

// this is class based component
class App extends Component {

  render() {
    return (
      // Provider will take the store which we have configured here using configureStore function
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
