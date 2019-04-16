import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/userAcctActions'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      "username": "",
      "password": "",
      "name": "",
      "role": "",
      "email": "",
      "phone": ""
    }
  }

  register = event =>{
      event.preventDefault();
      console.log(this.state)
      this.props.register(this.state)
  }

  getInfo = event =>{
    this.setState({[event.target.name]: event.target.value})
  }
  render(){
    return(
      <div>
        <h2>Register</h2>
        <form onSubmit = {this.register}>
          <input name = "username" onChange = {this.getInfo} value = {this.state.username} />
          <input name = "password" onChange = {this.getInfo} value = {this.state.password} />
          <input name = "name" onChange = {this.getInfo} value = {this.state.name} />
          <input name = "role" onChange = {this.getInfo} value = {this.state.role} />
          <input name = "email" type = "email" onChange = {this.getInfo} value = {this.state.email} />
          <input name = "phone" onChange = {this.getInfo} value = {this.state.phone} />
          <input type = "submit" value = "register" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    stuff: []
  }
}

export default connect(mapStateToProps, {register})(Register)