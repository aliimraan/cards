import axios from 'axios'
import {constants} from './constants'

export const login=(user)=>{
    return async(dispatch)=>{
        const response=await axios.post('',user)
        if(response.status===200){
            dispatch({
                type:constants.LOGIN_SUCCESS,
                payload:response.data
            })
        }else if(response.status===400){
            dispatch({
                type:constants.LOGIN_FAILURE,
                payload:response.data.msg
            })
        }
    }
}