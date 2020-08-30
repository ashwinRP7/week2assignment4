import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import credentials from './credentials';
import newToCartReducer from './newToCartReducer';
import userEmailReducer from './userEmailReducer';
import userPasswordReducer from './userPasswordReducer';
import cartItemsReducer from './cartItemsReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : isLoggedReducer,
    correctCredentials : credentials,
    newToCart : newToCartReducer,
    userEmail : userEmailReducer,
    userPassword : userPasswordReducer,
    cartItems : cartItemsReducer
});

export default allReducers;