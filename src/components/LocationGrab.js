import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocations, getLocation,deleteLoc} from '../actions/locationActions'


class LocationGrab extends Component{
  constructor(){
    super()
  }
  //ElPaso
  render(){
    return(
        <div>
            <button onClick ={e=>this.props.getLocations()}>Get Locations</button>
            <button onClick ={e=>this.props.getLocation(5)}>Get Location</button>
            <button onClick = {e=>this.props.deleteLoc(5)}>Delete City 5</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    fetchingLoc: state.location.fetchingLoc,
    locations: state.location.locations,
    error: state.location.error

  }
}
export default connect(mapStateToProps,{getLocations, getLocation, deleteLoc})(LocationGrab);