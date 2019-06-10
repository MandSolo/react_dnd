import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js";
import Target from "./Target.js";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Drag and drop example</p>
        </header>

        <div className="app-intro">
          <div className="app-container">
            <div className="item-container">
              {this.state.items.map((item, index) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
            <Target />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
