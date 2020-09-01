import React, { useContext } from 'react';
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import cartimg from './cart.png'
import cartImage from './cart.png'
import Navbar from './Navbar'
import ProductComponent from './ProductComponent'
import CartItemsComponent from './CartItemsComponent'
import {reMoveFromCart} from './actions'
import {CartItemsProvider} from './CartItemsContext'

import DisplayTotal from './DisplayTotal'

function Product()  {                       

            let { sid } = useParams();
            const dispatch = useDispatch();
            const array = useSelector(state => state.cartItems);
            //const [cartList,setCartList] = useContext(CartItemsContext);
            //let cartTotal;
                                
            //cartTotal = cartList.reduce((totalSum,item) => totalSum+item.cost,0);
            
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
                                <DisplayTotal/>
                                
                            </div>
                        </div>
                    
                </div>    
            );


}



export default Product;