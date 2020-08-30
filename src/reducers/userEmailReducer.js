const userEmailReducer = (state = "",action)=>{
    switch(action.type){
        case 'UPDATE_EMAIL':{
            return action.payload
        }
        case 'REMOVE_USER_EMAIL_STATE':{
            return "";
        }
        default:{
            return state;
        }
    }
};

export default userEmailReducer;