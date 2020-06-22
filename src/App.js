import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
// importing navbar from reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';

// this is function based component
// function App() {
//   return (
//     <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//       </div>
//   );
// }

// this is class based component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}


export default App;
