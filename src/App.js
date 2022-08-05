import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@material-ui/core';

function App() {

  function clickHandler() {
    console.log("got up to here");
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Came this far.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p></p>

        {/* Button Component */}
        <Button href="#" onClick={() => {const name = 'Elbert'; alert('Hello ', name);}} variant="contained">Click me</Button>

      </header>
    </div>
  );
}

export default App;
