import { FETCHING_LOC, FETCH_LOC_SUCCESS, FETCH_LOC_FAILURE, FETCHING_SINGLE_LOC, FETCH_SINGLE_LOC_SUCCESS, FETCH_SINGLE_LOC_FAILURE,POSTING_LOC, POST_LOC_SUCCESS,
    POST_LOC_FAILURE, DELETING_LOC, DELETE_LOC_SUCCESS, DELETE_LOC_FAILURE } from '../actions/locationActions';
 const initialState = {
   fetchingLoc: false,
   locations:null,
   error: ""
 }
 
 export default (state = initialState, action)=>{
   switch(action.type){
     case FETCHING_LOC:
       return{...state, fetchingLoc:true }
     case FETCH_LOC_SUCCESS:
       return{...state, fetchingLoc: false, locations: action.payload}
     case FETCH_LOC_FAILURE:
       return{...state, fetchingLoc: false, error: "Error fetching data"}
     case FETCHING_SINGLE_LOC:
       return{...state, fetchingLoc:true }
     case FETCH_SINGLE_LOC_SUCCESS:
       return{...state, fetchingLoc: false, locations: action.payload}
     case FETCH_SINGLE_LOC_FAILURE:
         return{...state, fetchingLoc: false, error: "Error fetching data"}
     case POSTING_LOC:
       return{...state, postingLoc: true}
     case POST_LOC_SUCCESS:
       return{...state, postingLoc: false, locations: action.payload}
     case POST_LOC_FAILURE:
       return{...state, postingLoc: false, error: "Error posting data"}
     case DELETING_LOC:
       return{...state, deletingLoc: true}
     case DELETE_LOC_SUCCESS:
       return{...state, deletingInv: false, locations: action.payload}
     case DELETE_LOC_SUCCESS:
       return{...state, deletingLoc: false, error: "Error deleting data"}

     default: return state;
   }
 }