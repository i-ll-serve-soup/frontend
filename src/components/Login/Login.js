import React from "react";
import styled from "styled-components";
import soup from "../../img/soup.png"

const Wrapper = styled.div `
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
    margin-top: 20%;
    padding: 20px;
    width: 100%;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    box-shadow: 0 0 30px black;
    `;

const RegisterContainer = styled.div`
    margin-top: 20%;
    padding: 20px;
    width: 100%;
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
    margin: 20px 0;
    background: rgba(55%,74%,33%,1.00);
    padding: 8px 16px;
    font-size: 13.82pt;
    letter-spacing: 0.25pt;
    font-weight: 700;
    color: white;
    text-decoration: none;
    border-radius: 5px;
`;

const LinkButton = styled.button`
    padding: 8px 16px;
    font-size: 10pt;
    letter-spacing: 0.25pt;
    font-weight: normal;
    color: rgba(48%,67%,28%,1.00);
    text-decoration: none;
    background-color: rgba(96%,98%,93%,1.00);
    border-radius: 5px;
    border: 1px solid rgba(81%,90%,71%,1.00);
`;

const ButtonLabel = styled.span`
    text-align: center;
    color: #777;
    font-size: 11px;
    margin: 10px 0;
`;

const Title = styled.h1`
    text-align:center;
    letter-spacing: 0.5px;
    font-weight: normal;
    font-size: 1.8rem;
`;

const ImageContainer = styled.div`
    width: 54%;
    margin: 21px auto;
    `;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

class Login extends React.Component {
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
    render() {
        return (
            <Wrapper>
                <FormContainer>
                    { this.state.display === "login" ?                     
                    <LoginContainer>
                        <ImageContainer>
                            <Image alt="soup" src={soup}/>
                        </ImageContainer>
                        <Title>I'll Serve Soup</Title>
                        <LoginForm onSubmit={(e) => {this.props.handleLogin(e)}}>
                            <InputText type="text" placeholder="Username"/>
                            <InputText type="password" placeholder="Password"/>
                            <LoginButton type="submit" value="Log In"></LoginButton>
                            <ButtonLabel>New user?</ButtonLabel>
                            <LinkButton type="button" className="link-button" onClick={this.showRegister}>Sign up</LinkButton>
                        </LoginForm>
                        
                    </LoginContainer> 
                    : 
                    <RegisterContainer>
                        <ImageContainer>
                            <Image alt="soup" src={soup}/>
                        </ImageContainer>
                        <Title>I'll Serve Soup</Title>
                        <LoginForm onSubmit={(e) => {this.props.handleRegister(e)}}>
                            <InputText type="text" placeholder="Username"/>
                            <InputText type="password" placeholder="Password"/>
                            <InputText type="text" placeholder="Email"/>
                            <InputText type="text" placeholder="Role"/>
                            <LoginButton type="submit" value="Register"></LoginButton>
                            <ButtonLabel>Already have an account?</ButtonLabel>
                            <LinkButton type="button" className="link-button" onClick={this.showLogin}>Log in</LinkButton>
                        </LoginForm>
                    </RegisterContainer>
                    }
                </FormContainer>
            </Wrapper>
        )
    }
}

export default Login;
