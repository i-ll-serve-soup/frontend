import React from "react";
import axios from "axios";

const Authenticate = App => LoginPage => {
    return class extends React.Component {
        constructor() {
            super();
            this.snackbar = React.createRef();
            this.state = {
                loggedIn : false,
                token : null,
            }
        }
        componentDidMount() {
            if (localStorage.getItem("expiry")) {
                let expiry = localStorage.getItem("expiry")
                if (Number(Date.now().toString().slice(0,10)) > expiry) {
                    localStorage.clear();
                    window.location.reload();
                    this.setState({loggedIn:false});
                } else {
                    if (localStorage.getItem("token")) {
                        this.setState({loggedIn: true});
                        this.setState({token:localStorage.getItem("token")});
                    } else {
                        localStorage.clear();
                    }
                }
            }
            else {
                this.setState({loggedIn:false});
            }
        }
        handleLogin = (event) => {
            event.preventDefault();
            let loginObj = {
                name : event.target[0].value,
                password : event.target[1].value,
            }
            axios
            .post('https://kitchen-soup-backend.herokuapp.com/api/users/login',loginObj)
            .then(response => 
              {
                this.setState({token: response.data.token})
                localStorage.setItem("token", response.data.token)
                this.setState({loggedIn: true});
              })
            .catch(err => {
                alert("Wrong password, or user doesn't exist.")
                console.log(err)
            });
          }
        handleRegister = (event) => {
            event.preventDefault();
            let registerObj = {
                name : event.target[0].value,
                role : event.target[1].value,
                email : event.target[2].value,
                password : event.target[3].value,
            }
            axios
            .post('https://kitchen-soup-backend.herokuapp.com/api/users/register', registerObj)
            .then(response => 
              {
                console.log(response.data.message)
                // this.setState({token: response.data.token})
                // localStorage.setItem("token", response.data.token)
                // this.setState({loggedIn: true});
              })
            .catch(err => {
                alert("Have you already used this email address to register? To reset your password, please contact the administrator.")
            });
          }
        handleTokenExpired = () => {
            this.setState({loggedIn : false});
        }

        // tokenExp = () => {
        //     setTimeout(() =>{alert('Session timed out due to inactivity. Please log in again.')}, 1500);
        //     this.setState({loggedIn: false});
        //     localStorage.clear();
        //     console.log(this.history);
        // }
        render() {
            if (this.state.loggedIn) {
            return (
                <App handleTokenExpired={this.handleTokenExpired}/>
            )
            } else {
                return (
                    <div>
                        <LoginPage handleLogin={this.handleLogin} handleRegister={this.handleRegister} />
                    </div>
                )
            }
        }
    }
}

export default Authenticate;