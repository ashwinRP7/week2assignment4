import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeCartItemAction} from './actions'


function CartItemsComponent(){
    
    const dispatch = useDispatch();
    const array = useSelector(state => state.cartItems);
    // const [count,setCount] = useState(0);
    // useEffect( ()=>{alert('Warning : Cart Updated !')},[count] );
    let x = {display:"inline",margin:'10px'};
    let y = {backgroundColor:'red',borderRadius:'50%'};
    let cartitems = array.map((item)=>
        <div key={item.id}>
            <p style={x}>{item.name}</p>
            <button style={y}onClick={()=>dispatch(removeCartItemAction({i:item.id}))}>X</button>
        </div>
    );

    return cartitems;
}


export default CartItemsComponent;