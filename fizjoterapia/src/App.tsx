import logo from './logo.svg';
import './App.css';
import { Page } from './features/mainPage/Page';

function App() {
  return (
    <>
      <header>
        Test header without navbar
      </header>
      <Page>
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </>

      </Page>
      <footer>
        Test Footer: created by BJ.
      </footer>
    </>
  )
}

export default App;
