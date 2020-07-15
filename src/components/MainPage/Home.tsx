import React from 'react'
import { AppStore } from '../../App.store'
import { observer } from 'mobx-react'
import { Card } from '../Card/Card'

interface IHomeProps {
  store: AppStore
}

@observer
export class Home extends React.Component<IHomeProps> {
  constructor(props: IHomeProps) {
    super(props)
    this.props.store.currentPath = '/'
  }

  render() {
    const { items } = this.props.store
    return (
      <div className="flex p-4 justify-center flex-wrap">
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
