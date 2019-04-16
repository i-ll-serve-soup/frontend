import { FETCHING_INV, FETCH_INV_SUCCESS, FETCH_INV_FAILURE, FETCHING_INV_ITEM, FETCH_INV_ITEM_SUCCESS, FETCH_INV_ITEM_FAILURE,POSTING_INV, POST_INV_SUCCESS,
    POST_INV_FAILURE, DELETING_INV, DELETE_INV_SUCCESS, DELETE_INV_FAILURE, UPDATING_INV, UPDATE_INV_SUCCESS, UPDATE_INV_FAILURE } from '../actions/inventoryActions';
 
 const initialState = {
   fetchingInv: false,
   inventory:[],
   postingInv: false,
 
 }
 
 export default (state = initialState, action)=>{
   switch(action.type){
     case FETCHING_INV:
       return{...state, fetchingInv:true }
     case FETCH_INV_SUCCESS:
       return{...state, fetchingInv: false, inventory: action.payload}
     case FETCH_INV_FAILURE:
       return{...state, fetchingInv: false, error: "Error fetching data"}
     case FETCHING_INV_ITEM:
       return{...state, fetchingInv:true }
     case FETCH_INV_ITEM_SUCCESS:
       return{...state, fetchingInv: false, inventory: action.payload}
     case FETCH_INV_ITEM_FAILURE:
       return{...state, fetchingInv: false, error: "Error fetching data"}
     case POSTING_INV:
       return{...state, postingInv: true}
     case POST_INV_SUCCESS:
       return{...state, postingInv: false, inventory: action.payload}
     case POST_INV_FAILURE:
       return{...state, postingInv: false, error: "Error posting data"}
     case DELETING_INV:
       return{...state, deletingInv: true}
     case DELETE_INV_SUCCESS:
       return{...state, deletingInv: false, inventory: action.payload}
     case DELETE_INV_SUCCESS:
       return{...state, deletingInv: false, error: "Error deleting data"}
     case UPDATING_INV:
       return{...state, updatingInv: true }
     case UPDATE_INV_SUCCESS:
       return{...state, updatingInv: false, inventory: action.payload}
     case UPDATE_INV_FAILURE:
       return{...state, updatingInv: false, error: "Error updating data"}
     default: return state;
   }
 }