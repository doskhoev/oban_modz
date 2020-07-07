import React from 'react'
import { Link } from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="flex item-center flex-wrap bg-orange-400 p-3 text-white">
          <div className="flex">
            <span className="text-2xl font-semibold uppercase">
              <Link to="/">Oban Modz</Link>
            </span>
          </div>
          <ul className="flex ml-6 mt-2">
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/">
                Главная
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/order">
                Заказ
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/about">
                О нас
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
