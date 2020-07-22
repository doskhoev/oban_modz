import * as React from 'react'
import { basketSvg } from '../../resources'
import { observer, inject } from 'mobx-react'
import { AppStore } from '../../App.store'
import { NavLink } from 'react-router-dom'

export interface IBasketProps {}

@inject('store')
@observer
export class Basket extends React.Component<IBasketProps> {
  private get store() {
    return (this.props as { store: AppStore }).store
  }

  render() {
    return (
      <NavLink to="/order">
        <div className={`p-1`}>
          <button className="bg-indigo-500 hover:bg-indigo-600 rounded focus:outline-none px-2 py-0">
            {basketSvg}
            {this.store.basketItems.length ? (
              <span className="px-1 bg-red-600 rounded-full">
                {this.store.basketItems.length}
              </span>
            ) : null}
          </button>
        </div>
      </NavLink>
    )
  }
}
