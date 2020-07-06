import React from 'react'
import { Link } from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <h1 className="text-2xl font-bold uppercase">
              <Link to="/">Oban Modz</Link>
            </h1>
          </div>
          <ul className="flex">
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/order">
                Order
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
