import { FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCHING_USER, FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE, DELETING_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from '../actions/userActions';
    const initialState = {
      fetchingInv: false
    }
    
    export default (state = initialState, action)=>{
      switch(action.type){
        case FETCHING_USERS:
          return{...state, fetchingInv:true }
        case FETCH_USERS_SUCCESS:
          return{...state, fetchingInv: false, locations: action.payload}
        case FETCH_USERS_FAILURE:
          return{...state, fetchingInv: false, error: "Error fetching data"}
        case FETCHING_USER:
          return{...state, fetchingInv:true }
        case FETCH_USER_SUCCESS:
          return{...state, fetchingInv: false, locations: action.payload}
        case FETCH_USER_FAILURE:
          return{...state, fetchingInv: false, error: "Error fetching data"}
        case DELETING_USER:
          return{...state, deletingInv: true}
        case DELETE_USER_SUCCESS:
          return{...state, deletingInv: false, locations: action.payload}
        case DELETE_USER_FAILURE:
          return{...state, deletingInv: false, error: "Error deleting data"}
        default: return state;
      }
    }