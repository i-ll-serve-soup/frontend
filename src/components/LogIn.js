import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn, register } from '../actions/userAcctActions'
import styled from "styled-components";

let user = {"username": "", "password": ""};

const Wrapper = styled.div`
    height: 86vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 14vh;
`;

const FormContainer = styled.div`
    max-width: 349px;
    width: 100%;
`;

const LoginContainer = styled.div`
    margin: 30px 0 0 0;
    width: 100%;
    height: 450px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    box-shadow: 0 0 30px black;
    `;

const RegisterContainer = styled.div`
    margin: 30px 0 0 0;
    width: 100%;
    height: 580px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    box-shadow: 0 0 30px black;
    `;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 6px 10%;
`;

const InputText = styled.input`
    height: 33px;
    margin: 0 0 7px 0;
    padding: 0 0 0 9px;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    font-size: 14px;
`;

const LoginButton = styled.input`
    height: 32px;
    background: #d66565;
    color: #fff;
    opacity: .65;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

const LinkButton = styled.button`
    color: blue;
    border-radius: 5px;
    border: none;
    background-color: white;
    padding: 10px;
    margin-top: 20px;
`;

const Title = styled.h1`
    text-align:center;
    letter-spacing: 0.5px;
    font-weight: normal;
    color: #5A0C0C;
    font-size: 1.8rem;
`;

class LogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display: "login",
        }
    }
    showRegister = () => {
        this.setState({display : "register"})
    }
    showLogin = () => {
        this.setState({display: "login"})
    }

    logIn = event =>{
      event.preventDefault()
    this.props.logIn(user)
    }
    getInfo = event =>{
      user[event.target.name]  = event.target.value
      console.log(event.target.value)
      console.log(user)
    }
    register = event =>{
    event.preventDefault();
    console.log(this.state)
    this.props.register(this.state)
    }

    render() {
        return (
            <Wrapper>
                <FormContainer>
                    { this.state.display === "login" ?                     
                    <LoginContainer>
                        <Title>Soup Kitchen</Title>
                        <LoginForm onSubmit={this.logIn}>
                            <InputText type="text" placeholder="Email"/>
                            <InputText type="password" placeholder="Password"/>
                            <LoginButton type="submit" value="Log In"></LoginButton>
                            <LinkButton type="button" className="link-button" onClick={this.showRegister}>New User? Register here.</LinkButton>
                        </LoginForm>
                        
                    </LoginContainer> 
                    : 
                    <RegisterContainer>
                        <Title>Soup Kitchen</Title>
                        <LoginForm onSubmit={this.register}>
                            <InputText type="text" placeholder="First Name"/>
                            <InputText type="text" placeholder="Last Name"/>
                            <InputText type="text" placeholder="Role"/>
                            <InputText type="text" placeholder="Email"/>
                            <InputText type="password" placeholder="Password"/>
                            <LoginButton type="submit" value="Log In"></LoginButton>
                            <LinkButton type="button" className="link-button" onClick={this.showLogin}>Already have an account? Log in here.</LinkButton>
                        </LoginForm>
                    </RegisterContainer>
                    }
                </FormContainer>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
  return{
    loginInfo: state.userAccounts.loginInfo,
    loggingIn: state.userAccounts.loggingIn,
    error: state.userAccounts.error

  }
}
export default connect(mapStateToProps,{logIn})(LogIn);