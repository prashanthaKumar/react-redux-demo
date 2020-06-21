import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import getUsersReducer from './getUsersReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
 
const store = createStore(getUsersReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
 
export default store
