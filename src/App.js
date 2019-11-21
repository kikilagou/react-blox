import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {

  async postBooks() {
  }

  async getBooks() {
    await axios
      // This is where the data is hosted
      .get("https://www.goodreads.com/search.xml?key=Q4uAl7lxzaYA85u59Kzvg&q=Ender%27s+Game")
      .then(response => {
        console.log(response.data)
      }
      )
      .catch();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.getBooks}>click me</button>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
              </a>
        </header>
      </div>
    );
  }
}

export default App;
