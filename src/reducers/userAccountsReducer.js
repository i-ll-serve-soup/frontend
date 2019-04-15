import { REGISTERING,REGISTER_SUCCESS, REGISTER_FAILURE,LOGGING_IN,LOGIN_SUCCESS,LOGIN_FAILURE } from '../actions/userAcctActions';
const initialState = {
  registering: false,
  error:null,
  loggingIn: false,
  loginInfo: localStorage.getItem("token"),
  registration: null
}

export default (state = initialState, action)=>{
  switch(action.type){
    case REGISTERING:
      return{ registering:true }
    case REGISTER_SUCCESS:
      return{ registering:false, registration: action.payload}
    case REGISTER_FAILURE:
      return{ registering: false, error: "Could not register user"}
    case LOGGING_IN:
      return{ loggingIn:true }
    case LOGIN_SUCCESS:
      console.log('in login success')
      
      return{ loggingIn: false, loginInfo: action.payload}
    case LOGIN_FAILURE:
      return{ loggingIn: true, error: "Error logging in."}
    default: return state;
  }
}