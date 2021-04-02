import {combineReducers} from 'redux'
import RegisterReducer from './Register'
import LoginReducer from './Login'

export default combineReducers({
    LoginReducer,
    RegisterReducer
  })
