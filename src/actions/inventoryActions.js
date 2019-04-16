import axios from 'axios';

export const FETCHING_INV = "FETCHING_INV";
export const FETCH_INV_SUCCESS = "FETCH_INV_SUCCESS";
export const FETCH_INV_FAILURE = "FETCH_INV_FAILURE";
export const FETCHING_INV_ITEM = "FETCHING_INV_ITEM";
export const FETCH_INV_ITEM_SUCCESS = "FETCH_INV_ITEM_SUCCESS";
export const FETCH_INV_ITEM_FAILURE = "FETCH_INV_ITEM_FAILURE";
export const POSTING_INV = "POSTING_INV";
export const POST_INV_SUCCESS = "POST_INV_SUCCESS";
export const POST_INV_FAILURE = "POST_INV_FAILURE";
export const DELETING_INV = "DELETING_INV";
export const DELETE_INV_SUCCESS = "DELETE_INV_SUCCESS";
export const DELETE_INV_FAILURE = "DELETE_INV_FAILURE";
export const UPDATING_INV = "UPDATING_INV";
export const UPDATE_INV_SUCCESS = "UPDATE_INV_SUCCESS";
export const UPDATE_INV_FAILURE = "UPDATE_FAILURE";


export const getInv = () => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    console.log('getinv')
    const promise = axios.get(`https://kitchen-soup-backend.herokuapp.com/api/items`);
    return dispatch=>{
      console.log('in dispatch of getinv')
      dispatch({type: FETCHING_INV});
      promise
        .then(response=>{
          console.log(response.data)
          dispatch({type:FETCH_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_INV_FAILURE})})


    }
}
export const getItem = (id) => {
    console.log('getitem')
    const promise = axios.get(`https://kitchen-soup-backend.herokuapp.com/api/items/${id}`);
    return dispatch=>{
      dispatch({type: FETCHING_INV_ITEM});
      promise
        .then(response=>{
          console.log(response.data)
          dispatch({type:FETCH_INV_ITEM_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_INV_ITEM_FAILURE})})


    }
}
export const addInv = (item) => {
    console.log('in adinv')
    console.log(item)
    const promise = axios.post(`https://kitchen-soup-backend.herokuapp.com/api/items`, item)
    return dispatch=>{
      console.log('in addInv dispatch')
      dispatch({type:POSTING_INV});
      promise
        .then(response=>{
          console.log(response.data)
          dispatch({type: POST_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: POST_INV_FAILURE})
        })
    };
}

export const deleteInv = (id) => {
    const promise = axios.delete(`https://kitchen-soup-backend.herokuapp.com/api/items/${id}`)
    return dispatch=>{
      console.log('in delete dispatch')

      dispatch({type: DELETING_INV})
      promise
        .then(response=>{
          console.log(response.data)
          dispatch({type: DELETE_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: DELETE_INV_FAILURE})
        })
    }
}
export const updateInv = (id, item) => {
    const promise = axios.put(`https://kitchen-soup-backend.herokuapp.com/api/items/${id}`, item)
    return dispatch =>{
      console.log('in update dispatch')
      dispatch({type: UPDATING_INV})
      promise
        .then(response =>{
          console.log(response.data)
          dispatch({type: UPDATE_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: UPDATE_INV_FAILURE, error: "Error"})
        })
     }
}