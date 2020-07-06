import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/MainPage/Home'
import { About } from './components/About/About'  
import { AppStore } from './App.store'
import { observer } from 'mobx-react'
import { Order } from './components/Order/Order'
import { Header } from './components/Header/Header'

export interface IAppProps {
  store: AppStore
}

@observer
export class App extends React.Component<IAppProps> {
  render() {
    const { store } = this.props
    return (
      <>
        <Router>
          <Header />
          <div>
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
      </>
    )
  }
}
