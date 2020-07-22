import React from 'react'
import { observer } from 'mobx-react'
import { IItem, IType, IBasketItem } from '../../App.interface'
import { observable, action } from 'mobx'
import { basketSvg } from '../../resources'

interface ICardProps extends IItem {
  onAdd: (item: IBasketItem) => void
}

@observer
export class Card extends React.Component<ICardProps> {
  @observable
  private types: IType[] = []

  @observable
  private selectedTypeIndex: number = 0

  componentDidMount() {
    this.types = this.props.types
  }

  @action.bound
  private onClickTypeSelect(index: number) {
    this.selectedTypeIndex = index
  }

  @action.bound
  private onClickBasket() {
    const { id, title, description, imageUrl } = this.props
    const type = this.props.types[this.selectedTypeIndex]
    const basketItem = {
      id,
      title,
      description,
      imageUrl,
      type,
    }
    this.props.onAdd(basketItem)
  }

  render() {
    return (
      <div className="card">
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
            {this.types.map((item, index) => {
              return (
                <div key={`type_${index}`} className="">
                  <div
                    onClick={() => this.onClickTypeSelect(index)}
                    className={`${
                      this.selectedTypeIndex === index
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-300 text-gray-500'
                    } hover:bg-gray-600 hover:text-white rounded mr-1 mb-1 px-2 py-1 text-center cursor-pointer`}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
          </div>
          <div
            className={
              'absolute top-0 left-0 w-1/3 text-center p-1 text-xl bg-gray-500 font-semibold text-white mr-auto rounded-br-xl'
            }
          >
            {this.types.length && this.types[this.selectedTypeIndex].price} ₽
          </div>

          <div className="absolute top-0 right-0 flex items-center justify-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-2 rounded-bl-xl focus:outline-none"
              onClick={() => this.onClickBasket()}
            >
              {basketSvg} Добавить
            </button>
          </div>
        </div>
      </div>
    )
  }
}
