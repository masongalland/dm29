import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Item from "./Item"

class App extends Component {
  constructor() {
    super()
    this.state = {
      newItemName: '',
      newItemColor: "#ffffff",
      inventory: [
        {itemName: "T-shirt", itemColor: "blue"},
        {itemName: "Hat", itemColor: "brown"},
        {itemName: "Pants", itemColor: "black"},
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
    
  }

  handleChange(e){
    let value = e.target.value;
    let id = e.target.id;
    if(id === "name"){
      console.log(value)
      this.setState({
        newItemName: value
      })
    }
    else if(id === "color"){
      this.setState({
        newItemColor: value
      })
    }
  }
  handleClick(){
    let inventory = this.state.inventory;
    inventory.push({itemName: this.state.newItemName, itemColor: this.state.newItemColor})
    this.setState({
      inventory: inventory,
      newItemName: "",
      newItemColor: "#ffffff"
    })

  }
  removeItem(index){
    let inventory = this.state.inventory.filter((element, i) => i !== index)
    this.setState({
      inventory: inventory
    })
  }
  
  render() {
    let items = this.state.inventory.map((item, index) => {
      return (
        <Item title={item.itemName}
              removeItem = {this.removeItem}
              index = {index} 
              color={item.itemColor} 
              key={index}/>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Closet</h1>
        </header>
        <h2>Add Item:</h2>
        <input id="name" placeholder="item name" value={this.state.newItemName} onChange = {this.handleChange} />
        <input type="color" id="color" placeholder="item color" value={this.state.newItemColor} onChange = {this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        <h2>Inventory</h2>
        {items}
      </div>
    );
  }
}

export default App;
