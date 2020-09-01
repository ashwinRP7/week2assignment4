import React, { useContext } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeCartItemAction} from './actions'
import {CartItemsContext} from './CartItemsContext'

function DisplayTotal(){
    
    const [cartList,setCartList] = useContext(CartItemsContext);
    
    let cartTotal;
    cartTotal = cartList.reduce((totalSum,item) => totalSum+item.cost,0);
    

    return (
        <h3>Cart Total : {cartTotal}</h3>
    );
}


export default DisplayTotal;