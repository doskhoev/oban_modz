import React from 'react'
import { AppStore } from '../../App.store'
import { observer, inject } from 'mobx-react'
import { IType } from '../../App.interface'

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

  render() {
    const items = this.store.basketItems
      .map(item => {
        return (
          <div className="flex rounded bg-indigo-300 m-1 p-2 text-white">
            <div className="w-1/4">{item.title}</div>
            <div className="w-1/4">{item.description}</div>
            <div className="w-1/6">{item.type.title}</div>
            <div className="w-1/6">{item.type.price} ₽</div>
            <div className="w-1/6">1 шт.</div>
          </div>
        )
      })
      .filter(_ => _)

    return (
      <div>
        <div className="justify-center">{items}</div>
        <div className="flex justify-end">
          <div className="bg-red-400 rounded px-2 py-1 m-1 text-white font-light">
            Сумма: {this.store.finalSum} ₽
          </div>
        </div>
      </div>
    )
  }
}
