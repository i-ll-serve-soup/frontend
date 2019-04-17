import React from 'react';
import axios from "axios";
import Select from "react-select";

class ItemEditForm extends React.Component {
  state = {
    id: '',
    item: {
        name: '',
        amount: '',
        unit: '',
        price: '',
        supplier_name: '',
        supplier_contact: '',
        image: '',
        categoryID: '',
    },
    selectedOption : null,
    categories : [],
  };
  componentDidMount() {
    let options = { 
      headers: {
          Authorization: localStorage.getItem("token"),
      }}
    axios.get(`https://kitchen-soup-backend.herokuapp.com/api/categories`, options)
    .then(resp => {this.setState({categories:resp.data.categories});})
    .catch(err => {alert("Unable to obtain categories from back-end."); console.log(err)})
    let itemObj = {
      name: this.props.location.state.item.name,
      amount: parseInt(this.props.location.state.item.amount),
      unit: this.props.location.state.item.unit,
      price: this.props.location.state.item.price,
      supplier_name: this.props.location.state.item.supplier_name,
      supplier_contact: this.props.location.state.item.supplier_contact,
      image: this.props.location.state.item.image,
      categoryID: parseInt(this.props.location.state.item.categoryID),
    };
    this.setState({
      id: this.props.location.state.item.id,
      item: itemObj,
      });

  }

  changeHandler = e => {
    this.setState({
      item: {
        ...this.state.item,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  updateItem = () => {
    let options = { 
        headers: {
            Authorization: localStorage.getItem("token"),
        }}
    let categoryID = this.state.selectedOption ? this.state.selectedOption.value : this.state.item.categoryID;
    let newItemObj = {
        name: this.state.item.name,
        amount: parseInt(this.state.item.amount),
        unit: this.state.item.unit,
        price: this.state.item.price,
        supplier_name: this.state.item.supplier_name,
        supplier_contact: this.state.item.supplier_contact,
        image: this.state.item.image,
        categoryID: parseInt(categoryID),
    }
    axios
      .put(
        `https://kitchen-soup-backend.herokuapp.com/api/items/${this.state.id}`,
        newItemObj,options
      )
      .then(response => {
        this.props.handleUpdate();
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleClick = e => {
    e.preventDefault();
    this.updateItem();
  };

  render() {
    const options = this.state.categories.map(obj => ({value: obj.id, label: obj.name}))
    return (
      <div className="form-wrapper">
      <form className="item-form" action="">
        <label>Item Name:</label>
        <input
          className="item-input"
          type="text"
          name="name"
          onChange={this.changeHandler}
          placeholder="name"
          value={this.state.item.name}
        />
        <div className="baseline" />
        <label>Item Quantity:</label>
        <input
          className="item-input"
          type="text"
          placeholder="amount"
          name="amount"
          onChange={this.changeHandler}
          value={this.state.item.amount}
        />
        <div className="baseline" />
        <label>Item Units:</label>
        <input
          className="item-input"
          type="text"
          name="unit"
          onChange={this.changeHandler}
          placeholder="units"
          value={this.state.item.unit}
        />
        <div className="baseline" />
        <label>Item Price:</label>
        <input
          className="item-input"
          type="text"
          name="price"
          onChange={this.changeHandler}
          placeholder="price"
          value={this.state.item.price}
        />
        <div className="baseline" />
        <label>Supplier Name:</label>
        <input
          className="item-input"
          type="text"
          name="supplier_name"
          onChange={this.changeHandler}
          placeholder="supplier name"
          value={this.state.item.supplier_name}
        />
        <div className="baseline" />
        <label>Supplier Contact:</label>
        <input
          className="item-input"
          type="text"
          name="supplier_contact"
          onChange={this.changeHandler}
          placeholder="supplier contact"
          value={this.state.item.supplier_contact}
        />
        <div className="baseline" />
        <label>Image URL:</label>
        <input
          className="item-input"
          type="text"
          name="image"
          onChange={this.changeHandler}
          placeholder="image"
          value={this.state.item.image}
        />
        <div className="baseline" />
        <label>Item Category:</label>
        <Select
            className="select"
            menuPlacement="top"
            value={this.state.selectedOption}
            onChange={this.handleSelectChange}
            options={options}
        />
        <div className="baseline" />
        <button className="edit-button" onClick={this.handleClick}>
          Update Item
        </button>
      </form>
    </div>
    );
  }
}

export default ItemEditForm;