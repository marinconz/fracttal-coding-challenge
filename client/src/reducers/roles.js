/* eslint-disable import/no-anonymous-default-export */
import { UPDATE, CREATE, DELETE, FETCH_ALL } from '../constants/actionTypes'

export default (roles = [], action) => {
    switch(action.type) {
        case UPDATE:
            return roles.map((role) => role._id === action.payload._id ? action.payload : role)
        case FETCH_ALL:
            return action.payload;
        case CREATE: 
            return [...roles, action.payload];
        case DELETE:
            return roles.filter((role)=> role._id !== action.payload)
        default:
            return roles;
    }
}