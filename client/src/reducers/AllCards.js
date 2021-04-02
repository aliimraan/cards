import {constants} from '../actions/constants'

const iniState=[
    {id: 1, title: 'to do'},
    {id: 2, title: 'doing'},
    {id: 3, title: 'done'},
]

const addCard=(state=iniState,action)=>{
    switch(action.type){
        case constants.PUSH_CARD:{
            state=[...state,...action.payload]
            break;
        }
        break;
    }
    return state
}
export default addCard