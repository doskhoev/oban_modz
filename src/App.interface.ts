interface IBaseItem {
  id: string
  title: string
  description?: string
  imageUrl?: string
}

export interface IItem extends IBaseItem {
  types: IType[]
}

export interface IType {
  title: string
  price: number
  imageUrl?: string
}

export interface IBasketItem extends IBaseItem {
  type: IType
}
