// this is a container component and this will store the state 

import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />

                    {/* here filter function will return that element in an new array, from the actual
                     array which satisfies this condition that dish.id === this.state.selectedDish
                     and we will select first item from that array so we used [0] */}
                <DishDetail 
                    dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}


export default Main;
