import React from 'react'
import { observer } from 'mobx-react'

interface ICardProps {
  title: string
  description?: string
  size: string
  imageUrl?: string
}

@observer
export class Card extends React.Component<ICardProps> {
  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          className="w-full"
          src="/img/bee.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{this.props.title}</div>
          <p className="text-gray-700 text-base">{this.props.description}</p>
          <p className="text-gray-600 text-sm">Размер: {this.props.size}</p>
        </div>
      </div>
    )
  }
}
