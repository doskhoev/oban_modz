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
      { id: 1, title: 'Хачапури', description: 'Очень вкусные', size: 'Big' },
      { id: 2, title: 'Беляш', description: 'Очень вкусные', size: 'Small' },
      { id: 3, title: 'Самса', description: 'Очень вкусные', size: 'Medium' },
    ])
  }

  // @action.bound
  // public upVersion() {
  //   const version = 1 + +this.version.split('.').pop()!
  //   this.version = `0.0.${version}`
  // }
}
