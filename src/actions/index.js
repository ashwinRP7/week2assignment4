export const increment = () =>{
    return{
        type:'INCREMENT'
    }
    
}

export const decrement = () =>{
    return{
        type:'DECREMEMT'
    }
}

export const wrongCredentials = ()=>{
    return{
        type:'WRONG_CREDENTIALS'
    }
}

export const rightCredentials = () =>{
    return{
        type:'RIGHT_CREDENTIALS'
    }
}

export const loginUser = () => {
    return {
        type : 'LOGIN_USER'
    }

}

export const logoutUser = () => {
    return {
        type : 'LOGOUT_USER'
    }

}

export const addToCartAction = () => {
    return {
        type:'addToCart'
    }
}

export const reMoveFromCart = () =>{
    return{
        type : 'reMoveFromCart'
    }
}

export const updateUserEmailAction = (para) => {
    return{
        type : 'UPDATE_EMAIL',
        payload : para
    }
}

export const updateUserPasswordAction = (para) => {
    return{
        type : 'UPDATE_PASSWORD',
        payload : para
    }
}

export const addCartItemAction = (obj) => {
    return{
        type : 'ADD_TO_CART',
        payload : obj
    }
}

export const removeCartItemAction = (obj) => {
    return{
        type : 'REMOVE_FROM_CART',
        payload : obj.i
    }
}

export const removeUserEmailState = () => {
    return{
        type : 'REMOVE_USER_EMAIL_STATE'
    }
}

export const removeUserPasswordState = () => {
    return{
        type : 'REMOVE_USER_PASSWORD_STATE'
    }
}
