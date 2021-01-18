import * as React from 'react'
import { observer } from 'mobx-react'
import { IItem } from '../../App.interface'
import { observable, action } from 'mobx'
import { basketSvg } from '../../resources'

interface ICardProps extends IItem {
  onAdd: (item: IItem) => void
}

@observer
export class Card extends React.Component<ICardProps> {
  @observable
  private selectedTypeIndex: number = 0

  @action.bound
  private onClickTypeSelect(index: number) {
    this.selectedTypeIndex = index
  }

  @action.bound
  private onClickBasket() {
    this.props.onAdd(this.props)
  }

  render() {
    return (
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg m-4">
        <img
          className={'w-full h-64 object-cover'}
          src={this.props.imageUrl || '/img/bee.png'}
          alt="Sunset in the mountains"
        />
        <div className={'mx-6 my-4'}>
          <div
            className={
              'font-semibold text-xl border-b border-orange-200 mb-2 text-center'
            }
          >
            {this.props.title}
          </div>
          <p className="text-gray-700 text-base text-center mb-2">
            {this.props.description}
          </p>
          <div className="flex flex-wrap justify-center">
            Цена: {this.props.price} ₽
          </div>

          {/* <div
            className={
              'absolute top-0 left-0 w-1/3 text-center p-1 text-xl bg-gray-500 font-semibold text-white mr-auto rounded-br-xl'
            }
          >
            {this.props.price} ₽
          </div> */}

          <div className="absolute bottom-0 right-0 flex items-center justify-center m-2">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded-xl focus:outline-none"
              onClick={() => this.onClickBasket()}
            >
              {basketSvg} В корзину
            </button>
          </div>
        </div>
      </div>
    )
  }
}
