import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { logoSvg } from '../../resources'
import { Basket } from './Basket'

export interface IHeaderProps {}

@inject('store')
@observer
export class Header extends React.Component<IHeaderProps> {
  private menu = [
    { id: 'main', title: 'Главная', routeTo: '/' },
    // { id: 'order', title: 'Заказ', routeTo: '/order' },
    { id: 'about', title: 'О нас', routeTo: '/about' },
    { id: 'contacts', title: 'Контакты', routeTo: '/contacts' },
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
          <ul className={`flex ml-6 flex-grow items-center`}>
            {this.menu.map(item => (
              <NavLink
                exact={true}
                key={`${item.id}`}
                className={`px-2 py-1 text-white hover:text-blue-800 m-px`}
                to={item.routeTo}
              >
                {item.title}
              </NavLink>
            ))}
          </ul>

          <Basket />
        </nav>
      </header>
    )
  }
}
