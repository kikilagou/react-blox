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
        <h1>This is the React Blox Demo Page!</h1>
        <h2>Components</h2>
        <h3>Button</h3>
        <Button className="primary rounded">Primary Button</Button>
        <Button className="secondary rounded">Secondary Button</Button>
        <Button className="success rounded">Success Button</Button>
        <Button className="warning rounded">Warning Button</Button>
        <Button className="danger rounded">Danger Button</Button>
        <Button className="info rounded">Info Button</Button>
        <Button className="light rounded">Light Button</Button>
        <Button className="dark rounded">Dark Button</Button>
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
