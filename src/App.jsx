import React from "react";
import "./App.css";
import {
  Button,
  HorizontalLine,
  Image,
  Link,
  PlainText,
  Heading
} from "./components/atoms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mergeSort(list) {}

  render() {
    return (
      <div className="App">
        <Button className="success rounded">Simple Button</Button>
        <HorizontalLine className="fill" />
        <Image src="" alt="An image" />
        <br />
        <Link href="https://google.com">this is a link</Link>
        <PlainText>this is a text</PlainText>
        <Heading Htype="h1">hi</Heading>
      </div>
    );
  }
}

export default App;
