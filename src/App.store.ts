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
    const items: IItem[] = [
      {
        id: 1,
        title: 'Липовый Мёд',
        imageUrl: '/img/bee.png',
        description: 'Очень вкусный',
        types: [
          { title: 'Пол кило', price: 600 },
          { title: 'Кило', price: 1000 },
          { title: '3 КГ', price: 2500 },
          { title: '5000 г.', price: 4000 },
          { title: '10000 г.', price: 7500 },
        ],
      },
      {
        id: 2,
        title: 'Майский Мёд',
        imageUrl: '/img/bee.png',
        description: 'С горчинкой',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
        ],
      },
      {
        id: 3,
        title: 'Горный Мёд',
        description: 'Очень полезный',
        imageUrl: '/img/bee.png',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
          { title: '3000 г.', price: 2500 },
        ],
      },
      {
        id: 4,
        title: 'Майский Мёд',
        description: 'С горчинкой',
        imageUrl: '/img/bee.png',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
        ],
      },
      {
        id: 5,
        title: 'Горный Мёд',
        description: 'Очень полезный',
        imageUrl: '/img/bee.png',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
          { title: '3000 г.', price: 2500 },
        ],
      },
      {
        id: 6,
        title: 'Майский Мёд',
        description: 'С горчинкой',
        imageUrl: '/img/bee.png',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
        ],
      },
      {
        id: 7,
        title: 'Горный Мёд',
        description: 'Очень полезный',
        imageUrl: '/img/bee.png',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
          { title: '3000 г.', price: 2500 },
        ],
      },
      {
        id: 8,
        title: 'Горный Мёд',
        description: 'Очень полезный',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
          { title: '3000 г.', price: 2500 },
        ],
      },
    ]
    return Promise.resolve(items)
  }

  // @action.bound
  // public upVersion() {
  //   const version = 1 + +this.version.split('.').pop()!
  //   this.version = `0.0.${version}`
  // }
}
