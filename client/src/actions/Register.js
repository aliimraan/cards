import {constants} from './constants'
import axios from 'axios'

export const register=()=>{
    return async (dispatch)=>{
        const response= await axios.post('')
        if(response.status===201){
            dispatch({
                type:constants.REGISTER_SUCCESS,
                payload:response.data
            })
        }else if(response.status===400){
            dispatch({
                type:constants.REGISTER_FAILURE,
                payload:response.data.error
            })
        }
    }
}