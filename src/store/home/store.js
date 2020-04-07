import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as home from './reducer'
import thunk from 'redux-thunk'

let store = createStore(combineReducers({ ...home }), applyMiddleware(thunk))
// let store = createStore(home);
export default store
