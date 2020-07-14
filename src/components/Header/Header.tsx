import React from 'react'
import { Link } from 'react-router-dom'
import { AppStore } from '../../App.store'
import { observer } from 'mobx-react'
import { logoSvg } from '../../resources'
import { Basket } from './components/Basket'

export interface IHeaderProps {
  store: AppStore
}

@observer
export class Header extends React.Component<IHeaderProps> {
  private menu = [
    { id: 'main', title: 'Главная', routeTo: '/' },
    // { id: 'order', title: 'Заказ', routeTo: '/order' },
    { id: 'about', title: 'Кто мы такие', routeTo: '/about' },
  ]

  render() {
    return (
      <header>
        <nav className="flex item-center flex-wrap bg-orange-400 p-3 text-white">
          <span className="text-2xl font-semibold uppercase">
            <Link to="/">
              <span className="flex">
                {logoSvg}
                <span>Oban Modz</span>
              </span>
            </Link>
          </span>
          <ul className={`flex ml-6 mt-1 flex-grow`}>
            {this.menu.map(item => (
              <li
                key={`${item.id}`}
                className={`px-3 py-1  ${
                  this.props.store.currentPath === item.routeTo
                    ? 'bg-orange-500 rounded-lg'
                    : ''
                }`}
              >
                <Link
                  className={`text-white hover:text-blue-800`}
                  to={item.routeTo}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Basket />
        </nav>
      </header>
    )
  }
}
