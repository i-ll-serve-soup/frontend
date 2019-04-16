import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInv, getItem,addInv,deleteInv, updateInv } from '../actions/inventoryActions'

class Inventory extends Component {
    constructor(){
      super()
    }
    getInv = e=>{
      this.props.getInv()
    }
    getItem5 = e=>{
      console.log('get item 5')
      this.props.getItem(5);
    }

    render(){
      return(
        <div>
        <button onClick = {this.getInv}>Get Inventory </button>
        <button onClick = {this.getItem5}>Get Item 5 </button>
        <button onClick = {()=>this.props.addInv({
                                      	name:  "Stroganoff", //required
                                      	quantity:  89,
                                      	units:  "ounces",
                                      })}>Add 89 oz. of Stroganoff</button>
        <button onClick = {()=>this.props.deleteInv(45)}>Delete Stroganoff</button>
        <button onClick = {()=>this.props.updateInv(1,{name:  "Beef noodle", //required
        quantity:  89,
        units:  "ounces"})}>Update Stroganoff</button>

        </div>
      );
    }
}

const mapStateToProps = state => {
  return{
    fetchingInv: state.inventory.fetchingInv,
    inventory: state.inventory.inventory,
    postingInv: state.inventory.postingInv

  }
}
export default connect(mapStateToProps,{getInv, getItem,addInv, deleteInv,updateInv})(Inventory);