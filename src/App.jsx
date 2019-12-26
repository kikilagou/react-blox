import React from "react";
import "./App.css";
import {
  Button,
  HorizontalLine,
  Image,
  Link,
  PlainText,
  Checkbox,
  Radio,
  SelectOption,
  ListItem
} from "./components/atoms";
import { Select, List } from "./components/molecules";

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
        <PlainText>this is text</PlainText>
        <Checkbox />
        hi
        <Radio />
        hi
        <Select>
          <SelectOption value="one">one</SelectOption>
          <SelectOption selected="true">two</SelectOption>
        </Select>
        <List>
          <ListItem>one</ListItem>
          <ListItem>two</ListItem>
        </List>
      </div>
    );
  }
}

export default App;
