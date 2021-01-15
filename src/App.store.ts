import { observable, action, computed } from 'mobx'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { IItem, IBasketItem } from './App.interface'

export class AppStore {
  @observable
  public items: IItem[] = []

  @observable
  public basketItems: IBasketItem[] = []

  constructor() {
    this.initFirebase()

    // this.getItems().then(res => {
    //   this.items = res
    // })
  }

  @computed
  public get finalSum() {
    return this.basketItems.reduce((sum, cur) => {
      return sum + cur.type.price
    }, 0)
  }

  @action.bound
  public addItemToBasket(item: IBasketItem) {
    this.basketItems.push(item)
  }

  @action.bound
  public removeItemFromBasket(
    item: IBasketItem,
    removeAllItems: boolean = false
  ) {
    const basketItems = this.basketItems.filter(
      i => i.id === item.id && i.type.title === item.type.title
    )
    if (removeAllItems) {
      this.basketItems = this.basketItems.filter(
        i => i.id !== item.id || i.type.title !== item.type.title
      )
    } else if (basketItems.length > 1) {
      const index = this.basketItems.indexOf(basketItems[0])
      this.basketItems.splice(index, 1)
    }
  }

  @action.bound
  public getItems(): Promise<IItem[]> {
    const items: IItem[] = [
      {
        id: '1',
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
        id: '2',
        title: 'Майский Мёд',
        imageUrl: '/img/bee.png',
        description: 'С горчинкой',
        types: [
          { title: '500 г.', price: 600 },
          { title: '1000 г.', price: 1000 },
        ],
      },
      {
        id: '3',
        title: 'Горный Мёд',
        description: 'Очень полезный',
        imageUrl: '/img/bee.png',
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

  private initFirebase() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCIhs2cBl6cFUSlqMjH9fnrgo_Cv0YDAlI',
      authDomain: 'oban-modz-86c7e.firebaseapp.com',
      projectId: 'oban-modz-86c7e',
      storageBucket: 'oban-modz-86c7e.appspot.com',
      messagingSenderId: '69985453611',
      appId: '1:69985453611:web:c501280de9429aaa3bcc6e',
    }
    firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore().collection('products')
    db.get().then(query => {
      query.forEach(doc => console.log(doc.data()))
    })
  }
}
