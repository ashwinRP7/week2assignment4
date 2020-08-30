import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import cartimg from './cart.png'
import cartImage from './cart.png'
import Navbar from './Navbar'
import ProductComponent from './ProductComponent'
import CartItemsComponent from './CartItemsComponent'
import {reMoveFromCart} from './actions'

function Product()  {                       

            let { sid } = useParams();
            const dispatch = useDispatch();
            const array = useSelector(state => state.cartItems);
            
            let cartTotal;
                                
            cartTotal = array.reduce((totalSum,item) => totalSum+item.cost,0);
            
            const hasUserAddedToCart = useSelector(state => state.newToCart);
            
            if(hasUserAddedToCart === true){
                alert("Warning : Adding product to the cart !")
                dispatch(reMoveFromCart());
            }
            
            return(          
                <div>
                    <Navbar></Navbar>
                    <h1>Product list of Seller {sid}</h1>
                    <div className="row">
                        <div className="col1">
                            <ProductComponent obj={{sid}}/>
                        </div>
                        <div className="col2">
                            <img src={cartImage}></img>
                            <CartItemsComponent/>
                            <h3>Cart Total : {cartTotal}</h3>
                        </div>
                    </div>
                </div>    
            );


}



export default Product;