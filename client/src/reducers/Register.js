import {constants} from '../actions/constants'
const iniState={}

const register=(state=iniState,action)=>{
    console.log(action.type)
    switch(action.type){
        case constants.REGISTER_REQUEST:state={...state,...action.Payload}
        
        case constants.REGISTER_SUCCESS:state={
            ...state,
            ...action.payload
        }
        case constants.REGISTER_FAILURE:state={
            ...state,
            ...action.payload
        }
        break;
    }
    console.log(state)
    return state
}
export default register