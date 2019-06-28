import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../screens/Home';
import RegisterRestaurant from '../screens/RegisterRestaurant';
import Login from '../screens/Login';
import Restaurants from '../screens/Restaurants';
import RestaurantDetails from '../screens/RestaurantDetails'
import Navbar from '../components/Navbar';


const customHistory = createBrowserHistory();

// Routes For Navigation
const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            {/* <Navbar/> */}
            <Route exact path='/' component={Home}></Route>
            <Route path='/register-restaurant' component={RegisterRestaurant}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/restaurants' component={Restaurants}></Route>
            <Route path='/restaurant-details' component={RestaurantDetails}></Route>
        </div>
    </Router>
)

export default MyRoutes