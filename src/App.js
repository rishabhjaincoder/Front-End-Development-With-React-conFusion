import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
// dishes contain an array of all the dishes
import { DISHES } from './shared/dishes';

// this is class based component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
      // this is how we set the state of a component
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}


export default App;
