import React, { Component } from 'react';
import Login from './components/LogIn'
import Register from './components/Register'
import Inventory from './components/Inventory'
import LocationGrab from './components/LocationGrab'
import DisplayInventory from './components/DisplayInventory'
import Authenticate from './components/Authenticate'
import './App.css';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Route path ="/register" component = {Register}/>
        <Route path = "/display" component = {DisplayInventory} />
        <Route path = "/inventory" component = {Inventory} />
        <Route path = "/locations" component = {LocationGrab} />
      </div>
    );
  }
}

const WrappedComponent = Authenticate(App)

export default WrappedComponent;