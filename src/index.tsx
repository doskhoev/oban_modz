import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppStore } from './App.store'

const store = new AppStore()

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
