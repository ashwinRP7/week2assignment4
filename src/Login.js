import React, { useState, useRef, useEffect } from 'react';
import {
    Redirect
  } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {wrongCredentials,rightCredentials,loginUser} from './actions';

function Login(){
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    let u = {
        padding:'20px',
        marginLeft:'450px',
        border : '1px solid #dcdcdc',
        marginTop : '300px',
        width:'400px',
        backgroundColor:'#E0FFFA'

    }
    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        
        let value = event.target.value;
        setUserEmail(value);
        //dispatch(updateUserEmailAction(value));
    }

    const handlePasswordChange = (event) => {
        
        let value = event.target.value;
        setUserPassword(value);
        //dispatch(updateUserPasswordAction(value));
    }

    //let user = useSelector(state => state.userEmail);
    //let pass = useSelector(state => state.userPassword);
    let isLogged = useSelector(state => state.isLogged);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userEmail === 'user@gmail.com' && userPassword === 'user'){            
            dispatch(rightCredentials());
            dispatch(loginUser());
        }
        else{
            dispatch(wrongCredentials());
            alert("Error : Please enter correct credentials!");
            window.location.reload();
            //return <Redirect to='/'/>
        }
    }
    
    if(isLogged){
        console.log("It has to come here");
        return <Redirect to='/seller'/>
    }
    return(
        <div style = {u}>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} placeholder="Email" type="text" name="email" onChange={handleEmailChange}></input>
                    <br></br>
                    <br></br>
                <input placeholder="Password" type="text" name="password" onChange={handlePasswordChange}></input>
                    <br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Login;