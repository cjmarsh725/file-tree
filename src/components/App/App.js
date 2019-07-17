import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    fileStructure: {
      "/": {
        indent: -1,
        path: "/",
        children: ["/Items", "/Stuff"]
      },
      "/ItemsFolder": {
        name: "ItemsFolder",
        path: "/ItemsFolder",
        indent: 0,
        isOpen: true,
        parent: "/",
        children: ["/ItemsFolder/Item1", "/ItemsFolder/Item2"]
      },
      "/StuffFolder": {
        name: "StuffFolder",
        path: "/StuffFolder",
        indent: 0,
        isOpen: false,
        parent: "/",
        children: ["/StuffFolder/Stuff1"]
      },
      "/ItemsFolder/Item1": {
        name: "Item1",
        path: "/ItemsFolder/Item1",
        indent: 1,
        isOpen: false,
        parent: "/ItemsFolder",
        content: null
      },
      "/ItemsFolder/Item2": {
        name: "Item2",
        path: "/ItemsFolder/Item2",
        indent: 1,
        isOpen: false,
        parent: "/ItemsFolder",
        content: null
      },
      "/StuffFolder/Stuff1": {
        name: "Stuff1",
        path: "/StuffFolder/Stuff1",
        indent: 1,
        isOpen: false,
        parent: "/StuffFolder",
        content: null
      }
    }
  }
  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
