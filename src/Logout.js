import React from 'react';
import {wrongCredentials,logoutUser,removeUserEmailState,removeUserPasswordState} from './actions';
import {useSelector,useDispatch} from 'react-redux';
import {
    Redirect
  } from "react-router-dom";

  function Logout(){
    const dispatch = useDispatch();
        let isLogged = useSelector(state=> state.isLogged);
        if(!isLogged){
            return <Redirect to='/'/>
        }
         
        dispatch(logoutUser());
        dispatch(wrongCredentials());
        dispatch(removeUserEmailState());
        dispatch(removeUserPasswordState());             
        
        alert("Success : You have been logged out");
        return(
            <div>
                Logout page<br></br>
                <Redirect to='/'/>
            </div>
        );
      
  }


 
export default Logout