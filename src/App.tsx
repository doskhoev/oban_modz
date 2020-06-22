import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import styled from 'styled-components'
import { AppStore } from './App.store'
import { observer } from 'mobx-react'

const Wrapper = styled.div`
  text-align: center;
  & header {
    background-color: #284c65;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`

export interface IAppProps {
  store: AppStore
}

@observer
export class App extends React.Component<IAppProps> {
  render() {
    const { version, upVersion } = this.props.store
    return (
      <Wrapper>
        <header className="App-header">
          <h1>{version}</h1>
        </header>
        <button onClick={upVersion}>up version</button>
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
  }
}
