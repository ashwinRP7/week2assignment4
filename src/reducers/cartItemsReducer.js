const cartItemsReducer = (state = [],action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
            let arr = [...state,action.payload]
            return arr
        }
        case 'REMOVE_FROM_CART':{
            let x = action.payload;
            let arr = [...state];
            let newArr = arr.filter((item)=> item.id!=x)
            return newArr
        }
        default:{
            return state;
        }
    }
};

export default cartItemsReducer;