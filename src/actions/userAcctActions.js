import axios from 'axios';

export const REGISTERING = "REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const register = (user) => {
    console.log('in register')
    console.log(user)
    var headers ={
      'Content-Type': 'application/json'
    }
    const promise = axios.post(`https://kitchen-soup-backend.herokuapp.com/api/users/register`, user, {headers:headers});
    return dispatch=>{
      console.log('in dispatch')
      dispatch({type: REGISTERING});
      promise
        .then(response=>{
          console.log('success')
          console.log(response.data)
          dispatch({type:REGISTER_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          console.log('nope!')
          if(err.response){
            console.log('error')
            console.log(err.response.data)
          }
          dispatch({type: REGISTER_FAILURE, error: "Could not register user."})})


    }
}
export const logIn = (credentials) => {
    console.log('in login')
    console.log(credentials)
 
    const promise = axios.post(`https://kitchen-soup-backend.herokuapp.com/api/users/login`, credentials);
    return dispatch =>{
      console.log('in dispatch')
      dispatch({type: LOGGING_IN});
      promise
        .then(response=>{

          console.log('in response')
          console.log(response.data.token)
          localStorage.setItem("token", response.data.token)
          dispatch({type:LOGIN_SUCCESS, payload: response.data.token})
        })
        .catch(err=>{
          console.log('error in login')
          console.log(err)
          dispatch({type: LOGIN_FAILURE, error: 'Error loggin in.'})})


    }
}