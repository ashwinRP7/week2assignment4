import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addCartItemAction,addToCartAction,reMoveFromCart} from './actions'
import item1 from './001.jpg'
import item2 from './002.jpg'
import item3 from './003.jpg'
import item4 from './004.jpg'
import PropTypes from 'prop-types';
function ProductComponent(props){
    const dispatch = useDispatch();
    let seller1=[{name:"Item 1",price:10,source:item1,id:1},{name:"Item 2",price:20,source:item2,id:2},{name:"Item 3",price:30,source:item3,id:3}];
    let seller2=[{name:"Item 2",price:20,source:item2,id:4},{name:"Item 4",price:40,source:item4,id:5}];
    let seller3=[{name:"Item 4",price:40,source:item4,id:6}];
    let sty = {
        padding:'20px',
        border : '1px solid #dcdcdc',
        width:'300px',
        margin:'20px'
    }
    let btnstyle = {
        padding:'10px',
        backgroundColor:'green',
        color:'white'
    }
    let productList;
    switch(props.obj.sid){
        case "1":{
            productList = seller1.map((item)=>
                <div key={item.id} style={sty}>
                    <img src={item.source}></img>
                    <br></br>
                    <p>{item.name}</p>
                    <p>Price : ${item.price}</p>
                    <button style={btnstyle} onClick={()=>{dispatch(addCartItemAction({name:item.name,cost:item.price,id:item.id}));dispatch(addToCartAction())}}>Add to cart</button>
                </div>
            );
            break;
        }
        case "2":{
            productList = seller2.map((item)=>
                <div key={item.id} style={sty}>
                    <img src={item.source}></img>
                    <br></br>
                    <p>{item.name}</p>
                    <p>Price : ${item.price}</p>
                    <button style={btnstyle} onClick={()=>{dispatch(addCartItemAction({name:item.name,cost:item.price,id:item.id}));dispatch(addToCartAction())}}>Add to cart</button>
                </div>
            );
            break;
        }
        case "3":{
            productList = seller3.map((item)=>
                <div key={item.id} style={sty}>
                    <img src={item.source}></img>
                    <br></br>
                    <p>{item.name}</p>
                    <p>Price : ${item.price}</p>
                    <button style={btnstyle} onClick={()=>{dispatch(addCartItemAction({name:item.name,cost:item.price,id:item.id}));dispatch(addToCartAction())}}>Add to cart</button>
                </div>
            );
            break;
        }
    }
    const hasUserAddedToCart = useSelector(state => state.newToCart);
    if(hasUserAddedToCart){
        alert("Warning : Adding product to the cart !")
        dispatch(reMoveFromCart());
    }
    return productList;
}
ProductComponent.propTypes = {
    obj : PropTypes.object
}

export default ProductComponent;