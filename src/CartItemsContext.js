import React, { useState , createContext } from 'react';
import { tsPropertySignature } from '@babel/types';

export const CartItemsContext = createContext();

export const CartItemsProvider  = (props)=>{
    const [cartList,setCartList] = useState([]);

    return(
        <CartItemsContext.Provider value={[cartList,setCartList]}>
            {props.children}
        </CartItemsContext.Provider>
    );
}
