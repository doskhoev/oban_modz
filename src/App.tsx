import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
// import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  & img {
    height: 40vmin;
    pointer-events: none;
    animation: App-logo-spin infinite 120s linear;
  }
  & header {
    background-color: #282c34;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`

const App: React.FunctionComponent = () => (
  <Wrapper>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="spider" />
      <h1>Гизг - паук</h1>
    </header>
    <Router>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </Wrapper>
)

export default App
