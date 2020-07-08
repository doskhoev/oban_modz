import React from 'react'
import { observer } from 'mobx-react'
import { IItem } from '../../App.interface'

interface ICardProps extends IItem {}

@observer
export class Card extends React.Component<ICardProps> {
  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border">
        <img
          className="w-full"
          src="/img/bee.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-semibold text-xl border-b border-orange-200 mb-2 text-center">
            {this.props.title}
          </div>
          <p className="text-gray-700 text-base text-center mb-2">
            {this.props.description}
          </p>
          <div className="flex flex-wrap">
            {this.props.prices.map((item, index) =>
              index < this.props.prices.length - 1 ? (
                <div className="w-1/3 ml-auto">
                  <div className="bg-gray-500 rounded mr-1 mb-1 p-1 text-center text-white">
                    {item.title}
                  </div>
                </div>
              ) : (
                <div className="w-1/3 mr-auto">
                  <div className="bg-gray-500 rounded mr-1 mb-1 p-1 text-center text-white">
                    {item.title}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }
}
