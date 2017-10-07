import {combineReducers} from 'redux'
import UserReducer from './reducer_users'
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer, /*User Reducer is the entire array of users inside of reducer_users now.
  It's now available throughout the entire application*/
  activeUser: ActiveUserReducer
})
export default allReducers
