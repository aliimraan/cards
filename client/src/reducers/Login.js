import {constants} from '../actions/constants'

const iniState={
    token:null,
    user:{},
    authentication:false,
    isLoggedIn:false
}

const login=(state=iniState,action)=>{
    switch(action.type){
        case constants.LOGIN_REQUEST:{
            state={...state,...action.payload}
            break;
        }
        case constants.LOGIN_SUCCESS:{
            state={...state,
                token:action.payload.token,
                authentication:true,
                isLoggedIn:true,
                user:action.payload.user
            }
            localStorage.setItem("token",state.token);
            localStorage.setItem("user",JSON.stringify(state.user));
            break;
        }
        case constants.LOGIN_FAILURE:{
            state={...state,...action.payload}
            break;
        }
    }
    console.log(state)
        return state
}
export default login