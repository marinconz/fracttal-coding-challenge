import { combineReducers } from 'redux'
import roles from './roles'
import auth from './auth'

export default combineReducers({ roles, auth })