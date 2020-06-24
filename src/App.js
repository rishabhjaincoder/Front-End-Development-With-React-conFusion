import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
// importing navbar from reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';
// importing menu from the components
import Menu from './components/MenuComponent';

// this is class based component
class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}


export default App;
