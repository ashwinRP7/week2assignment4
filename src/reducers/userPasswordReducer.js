const userPasswordReducer = (state = "",action)=>{
    switch(action.type){
        case 'UPDATE_PASSWORD':{
            return action.payload
        }
        case 'REMOVE_USER_PASSWORD_STATE':{
            return "";
        }
        default:{
            return state;
        }
    }
};

export default userPasswordReducer;