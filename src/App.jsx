import React from "react";
import "./App.css";
import { Button } from "./components/atoms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mergeSort(list) {}

  render() {
    return (
      <div className="App">
        <Button class="simple">Simple Button</Button>
      </div>
    );
  }
}

export default App;
