import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>env1: {process.env.REACT_APP_TEST_ENV_VAL}</div>
        <div>env2: {process.env.REACT_APP_TEST_VAR}</div>
        <div>env3: {process.env.REACT_APP_NETLIFY_VAL}</div>
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

export default App;
