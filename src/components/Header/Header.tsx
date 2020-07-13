import React from 'react'
import { Link } from 'react-router-dom'
import { AppStore } from '../../App.store'
import { observer } from 'mobx-react'

export interface IHeaderProps {
  store: AppStore
}

@observer
export class Header extends React.Component<IHeaderProps> {
  private menu = [
    { title: 'Главная', routeTo: '/' },
    { title: 'Заказ', routeTo: '/order' },
    { title: 'Кто мы такие', routeTo: '/about' },
  ]

  render() {
    return (
      <header>
        <nav className="flex item-center flex-wrap bg-orange-400 p-3 text-white">
          <span className="text-2xl font-semibold uppercase">
            <Link to="/">
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="30"
                  fill="none"
                  viewBox="0 0 49 37"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M32 14a24.74 24.74 0 00-4.026.326c.235-2.871 1.802-6.131 4.511-8.84C37.172.798 43.503-.468 46.627 2.655c3.125 3.125 1.858 9.457-2.828 14.143-.08.08-.16.158-.24.235C40.432 15.14 36.401 14 32 14zM17.714 2.714C20.477-.05 25.748.622 30.17 4.055c-3.162 3.359-4.866 7.418-4.938 11.055a20.126 20.126 0 00-4.451 1.981l-.24-.235C15.856 12.17 14.59 5.838 17.714 2.714zm24.249 16.709C45.047 21.257 47 23.97 47 27s-1.953 5.743-5.037 7.577A28.026 28.026 0 0043 27c0-2.626-.361-5.167-1.037-7.577zM39 27c0-3.374-.696-6.585-1.953-9.498A20.52 20.52 0 0032.325 17 19.908 19.908 0 0135 27c0 3.643-.974 7.058-2.675 10h.175a20.52 20.52 0 004.547-.502A23.922 23.922 0 0039 27zm-8 0c0-3.55-1.156-6.83-3.112-9.483-1.445.334-2.788.82-3.99 1.432A11.956 11.956 0 0127 27c0 3.098-1.174 5.922-3.102 8.051a17.497 17.497 0 003.99 1.432A15.929 15.929 0 0031 27zm-8 0c0 2.238-.92 4.262-2.401 5.714A7.96 7.96 0 0115 35a8 8 0 01-5.958-13.339 5.002 5.002 0 00-4.978-2.421A2 2 0 111.732 19a6 6 0 018.042 1.943 8 8 0 012.21-1.355A5.003 5.003 0 008.9 15.374 2 2 0 117 14a6.001 6.001 0 015.955 5.264 8.041 8.041 0 013.657-.101 7.983 7.983 0 013.987 2.123A7.975 7.975 0 0123 27zm-10-2a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Oban Modz</span>
              </span>
            </Link>
          </span>
          <ul className={`flex ml-6 mt-1`}>
            {this.menu.map(item => (
              <li
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
        </nav>
      </header>
    )
  }
}
