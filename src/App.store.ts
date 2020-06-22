import { observable, action } from 'mobx'

export class AppStore {
  @observable
  public version: string = '0.0.1'

  @action.bound
  public upVersion() {
    const version = 1 + +this.version.split('.').pop()!
    this.version = `0.0.${version}`
  }
}
