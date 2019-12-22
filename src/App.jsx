import React from "react";
import "./App.css";
import { Button } from "./components/atoms";
import colors from "./styles/colors";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mergeSort(list) {}

  render() {
    return (
      <div className="App">
        <header className="App-header">Learn React</header>
        <Button class="simple">Simple Button</Button>
      </div>
    );
  }
}

export default App;
