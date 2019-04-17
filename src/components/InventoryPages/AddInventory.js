import React from "react";
import axios from "axios";
import Select from 'react-select';

class AddInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption : null,
            categories : [],
        }
    }
    componentDidMount() {
        let options = { 
            headers: {
                Authorization: localStorage.getItem("token"),
            }}
        axios.get(`https://kitchen-soup-backend.herokuapp.com/api/categories`, options)
        .then(resp => {this.setState({categories:resp.data.categories});})
        .catch(err => {alert("Unable to obtain categories from back-end."); console.log(err)})
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption : selectedOption });
      }
    render() {
        const options = this.state.categories.map(obj => ({value: obj.id, label: obj.name}))
        
        return (
            <div className="form-wrapper">
                <form className="item-form" onSubmit={(e) => this.props.handleAdd(e, this.state.selectedOption.value, this.showSnackBar)}>
                    <label>Item Name:</label>
                    <input className="item-input" type="text" placeholder="name"/>
                    <label>Item Quantity:</label>
                    <input className="item-input" type="number" placeholder="quantity"/>
                    <label>Item Units:</label>
                    <input className="item-input" type="text" placeholder="units"/>
                    <label>Item Price:</label>
                    <input className="item-input" type="text" placeholder="price"/>
                    <label>Supplier Name:</label>
                    <input className="item-input" type="text" placeholder="supplier name"/>
                    <label>Supplier Contact:</label>
                    <input className="item-input" type="text" placeholder="supplier contact"/>
                    <label>Image URL:</label>
                    <input className="item-input" type="text" placeholder="image URL"/>
                    <label>Category:</label>
                    <Select
                        className="select"
                        menuPlacement="top"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    <input className="item-input" value="Add to Inventory" type="submit"/>
                </form>
            </div>
        )
    }
}

export default AddInventory;