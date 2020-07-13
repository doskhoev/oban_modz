import React from 'react'
import { AppStore } from '../../App.store'
import { observer } from 'mobx-react'

export interface IOrderProps {
  store: AppStore
}

@observer
export class Order extends React.Component<IOrderProps> {
  constructor(props: IOrderProps) {
    super(props)
    this.props.store.currentPath = '/order'
  }

  render() {
    return (
      <div className="font-light text-center m-10 text-lg">
        <h1>Пока что тут пусто</h1>
      </div>
    )
  }
}
