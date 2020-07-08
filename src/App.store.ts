import { observable, action } from 'mobx'
import { IItem } from './App.interface'

export class AppStore {
  @observable
  public items: IItem[] = []

  // @observable
  // public version: string = '0.0.1'

  constructor() {
    this.getItems().then(res => {
      this.items = res
    })
  }

  @action.bound
  public getItems(): Promise<IItem[]> {
    return Promise.resolve([
      {
        id: 1,
        title: 'Липовый Мёд',
        description: 'Очень вкусный',
        prices: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
          { title: '3000 г.', price: 2500 },
          // { title: '5000 г.', price: 4000 },
          // { title: '10000 г.', price: 7500 },
        ],
      },
      {
        id: 2,
        title: 'Майский Мёд',
        description: 'С горчинкой',
        prices: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
        ],
      },
      {
        id: 3,
        title: 'Горный Мёд',
        description: 'Очень полезный',
        prices: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
          { title: '3000 г.', price: 2500 },
        ],
      },
    ])
  }

  // @action.bound
  // public upVersion() {
  //   const version = 1 + +this.version.split('.').pop()!
  //   this.version = `0.0.${version}`
  // }
}
