import React from "react";
import "./App.css";
import { Button, HorizontalLine, Image } from "./components/atoms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mergeSort(list) {}

  render() {
    return (
      <div className="App">
        <Button>Simple Button</Button>
        <HorizontalLine />
        <Image src="" alt="An image" />
      </div>
    );
  }
}

export default App;
