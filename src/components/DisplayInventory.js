import React, { Component } from 'react'
import './index.css'
import { getInv } from '../actions/inventoryActions'
import { connect } from 'react-redux'
let itemsDisplay = [];
let inventoryArr=[];

class DisplayInventory extends Component{
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.getInv()
    if(localStorage.getItem("token")){

  }
  }
  delete = (id)=>{
    console.log('delete', id)
  }

  update = (id) =>{
    console.log('update', id)
  }

  render(){

    inventoryArr=this.props.inventory
    if(this.props.inventory.length != 0){
    for(let i = 0; i<15; i++){
      console.log()
      itemsDisplay.push(inventoryArr[i])
    }console.log(itemsDisplay)}

    return(
      <div>
      {this.props.fetchingInv ? (<h3>Hold on, pulling up data</h3>) : (
        <div className = "item-container">
            {
              itemsDisplay.map((item, index)=>{

                return (<div>
                  <button onClick = {(e)=>this.delete(item.id)}>Delete</button>
                  <button onClick={(e)=>this.update(item.id)}>Update</button>
                <div key ={item.id}  className = "item">{item.name} {item.quantity} {item.units}</div></div>)
              })
            }
        </div>
      )
    }</div>
  )}}





const mapStateToProps = state => {
  return{
    fetchingInv: state.inventory.fetchingInv,
    inventory: state.inventory.inventory,
    postingInv: state.inventory.postingInv

  }
}

export default connect(mapStateToProps,{getInv})(DisplayInventory);