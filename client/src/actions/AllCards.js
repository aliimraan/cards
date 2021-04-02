import {constants} from './constants'

const addCard=(data)=>{
    console.log(data)
    return dispatch({
        type:constants.PUSH_CARD,
        payload:data
    })
}
export default addCard