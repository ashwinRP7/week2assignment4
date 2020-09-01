import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import {useSelector} from 'react-redux';


import SellerList from './SellerList'
import Product from './Product'
import Logout from './Logout'
import Login from './Login'
import './Seller.css';
import {CartItemsProvider} from './CartItemsContext'



function Seller() {
    let isLogged = useSelector(state => state.isLogged);
    if(!isLogged){
        return (
            <Redirect to='/'/>
        );
    }
    return(
        <Router>
            <div>
                <CartItemsProvider>                      
                    <Switch>
                        <Route exact path='/seller'>
                            <SellerList></SellerList>
                        </Route>
                        <Route path='/seller/:sid' children={<Product />}>

                        </Route>
                        <Route path='/logout' component={Logout}></Route>
                        <Route path='/' component={Login}></Route>
                    </Switch>
                </CartItemsProvider>
            </div>
        </Router>
    );
}

export default Seller;