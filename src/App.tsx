import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from './components/MainPage/Home'
import { About } from './components/About/About'
import styled from 'styled-components'
import { AppStore } from './App.store'
import { observer } from 'mobx-react'
import { Order } from './components/Order/Order'

const Wrapper = styled.div`
  text-align: center;
  & header {
    background-color: #284c65;
    color: white;
  }
`

export interface IAppProps {
  store: AppStore
}

@observer
export class App extends React.Component<IAppProps> {
  render() {
    const { store } = this.props
    return (
      <Wrapper>
        <header className="App-header">
          <h1>TODO: implement title</h1>
        </header>
        <Router>
          <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>{' '}
            <Link to="/order">Order</Link>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/">
                <Home store={store} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Wrapper>
    )
  }
}
