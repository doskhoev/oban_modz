import React from 'react'
import { AppStore } from '../../App.store'
import { observer, inject } from 'mobx-react'
import { action } from 'mobx'
import { IBasketItem } from '../../App.interface'
import { OrderItem, IOrderItemProps } from './OrderItem'

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
  private get store() {
    return (this.props as { store: AppStore }).store
  }

  @action.bound
  private onClickMakeOrder() {
    alert('TODO')
  }

  @action.bound
  private onAddCount(item: IOrderItemProps) {
    this.store.addItemToBasket(item as IBasketItem)
  }

  @action.bound
  private onRemoveCount(item: IOrderItemProps) {
    this.store.removeItemFromBasket(item as IBasketItem)
  }

  @action.bound
  private onRemoveItem(item: IOrderItemProps) {
    this.store.removeItemFromBasket(item as IBasketItem, true)
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
      }, [] as IOrderItemProps[])
      .map((item, index) => {
        return (
          <OrderItem
            key={`order_item_${index}`}
            {...item}
            addCount={this.onAddCount}
            removeCount={this.onRemoveCount}
            removeItem={this.onRemoveItem}
          />
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
