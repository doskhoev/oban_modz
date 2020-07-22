import React from 'react'
import { AppStore } from '../../App.store'
import { observer } from 'mobx-react'
import { Card } from '../Card/Card'

interface IHomeProps {
  store: AppStore
}

@observer
export class Home extends React.Component<IHomeProps> {
  render() {
    const { items } = this.props.store
    return (
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3">
        {items.map(item => {
          return (
            <Card
              key={item.id}
              {...item}
              onAdd={this.props.store.addItemToBasket}
            />
          )
        })}
      </div>
    )
  }
}
