import React from 'react'
import { AppStore } from '../../App.store'
import { observer, inject } from 'mobx-react'

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
    return (
      <div className="font-light text-center m-10 text-lg">
        Пока что тут пусто
      </div>
    )
  }
}
