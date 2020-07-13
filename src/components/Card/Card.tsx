import React from 'react'
import { observer } from 'mobx-react'
import { IItem, IType } from '../../App.interface'
import { observable, action } from 'mobx'

interface ICardProps extends IItem {}

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

  render() {
    return (
      <div
        className={
          'relative bg-white rounded-xl overflow-hidden shadow-lg max-w-sm min-w-sm m-4 border '
        }
      >
        <img
          className={'w-full'}
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
                <div key={`type_${index}`} className={`w-1/3`}>
                  <div
                    onClick={() => this.onClickTypeSelect(index)}
                    className={`${
                      this.selectedTypeIndex === index
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-300 text-gray-500'
                    } hover:bg-gray-600 hover:text-white rounded mr-1 mb-1 p-1 text-center cursor-pointer`}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
          </div>
          <div
            className={
              'absolute top-0 left-0 w-2/5 text-center p-1 text-4xl bg-orange-600 text-white mr-auto rounded-br-2xl border-r border-b border-orange-400'
            }
          >
            {this.types.length && this.types[this.selectedTypeIndex].price} ₽
          </div>
        </div>
      </div>
    )
  }
}
