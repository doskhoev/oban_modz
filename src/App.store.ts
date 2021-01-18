import { observable, action, computed } from 'mobx'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import { IItem } from './App.interface'

export class AppStore {
  @observable
  public items: IItem[] = []

  @observable
  public basketItems: IItem[] = []

  constructor() {
    this.initFirebase()

    // this.getItems().then(res => {
    //   this.items = res
    // })
  }

  @computed
  public get finalSum() {
    return this.basketItems.reduce((sum, cur) => {
      return sum + cur.price
    }, 0)
  }

  @action.bound
  public addItemToBasket(item: IItem) {
    this.basketItems.push(item)
  }

  @action.bound
  public removeItemFromBasket(item: IItem, removeAllItems: boolean = false) {
    const basketItems = this.basketItems.filter(i => i.id === item.id)
    if (removeAllItems) {
      this.basketItems = this.basketItems.filter(i => i.id !== item.id)
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
        price: 2500,
      },
      {
        id: '2',
        title: 'Майский Мёд',
        imageUrl: '/img/bee.png',
        description: 'С горчинкой',
        price: 2800,
      },
      {
        id: '3',
        title: 'Горный Мёд',
        description: 'Очень полезный',
        imageUrl: '/img/bee.png',
        price: 3000,
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
      this.items = query.docs.map(doc => doc.data()) as IItem[]
    })
  }
}
