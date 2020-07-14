import React from 'react'
import { AppStore } from '../../App.store'
import { observer } from 'mobx-react'

export interface IAboutProps {
  store: AppStore
}

@observer
export class About extends React.Component<IAboutProps> {
  constructor(props: IAboutProps) {
    super(props)
    this.props.store.currentPath = '/about'
  }

  render() {
    return (
      <div className="font-light text-center m-10 text-lg">
        <h1>И тут тоже пока пусто</h1>
      </div>
    )
  }
}
