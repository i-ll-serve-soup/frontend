import { combineReducers } from 'redux';
import userAccountsReducer from './userAccountsReducer';

export default combineReducers({
    userAccounts: userAccountsReducer

})