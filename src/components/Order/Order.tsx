import React from 'react'
import { AppStore } from '../../App.store'
import { observer, inject } from 'mobx-react'
import { action } from 'mobx'
import { IBasketItem } from '../../App.interface'

interface ITmp {
  id: string
  count: number
  itemId: string
  typeIndex: number
}

export interface IOrderProps {}

@inject('store')
@observer
export class Order extends React.Component<IOrderProps> {
  constructor(props: IOrderProps) {
    super(props)
    this.store.currentPath = '/order'
  }

  private get store() {
    return (this.props as { store: AppStore }).store
  }

  @action.bound
  private onClickMakeOrder() {
    alert('TODO')
  }

  render() {
    const items = this.store.basketItems
      .reduce((arr, cur) => {
        const findItem = arr.find(
          item => item.title === cur.title && item.type.title === cur.type.title
        )
        if (findItem) {
          findItem.count += 1
        } else {
          arr.push({ ...cur, count: 1 })
        }
        return arr
      }, [] as (IBasketItem & { count: number })[])
      .map(item => {
        return (
          <div className="flex rounded bg-indigo-300 m-1 p-2 text-white">
            <div className="w-1/6">{item.title}</div>
            <div className="w-1/6">{item.description}</div>
            <div className="w-1/6">{item.type.title}</div>
            <div className="w-1/6">{item.type.price} ₽ за шт.</div>
            <div className="w-1/6">{item.count} шт.</div>
            <div className="w-1/6">{item.type.price * item.count} ₽</div>
          </div>
        )
      })

    return items.length ? (
      <div>
        <div className="justify-center">{items}</div>
        <div className="flex justify-end">
          <div className="bg-red-400 rounded px-2 py-1 m-1 text-white font-light">
            Сумма: {this.store.finalSum} ₽
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-4 py-2 text-2xl font-bold focus:outline-none"
            onClick={this.onClickMakeOrder}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    ) : (
      <div className="flex justify-center p-4 m-20 rounded-full bg-gray-300">
        Тут пока пусто
      </div>
    )
  }
}
