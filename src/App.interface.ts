export interface IItem {
  id: string
  title: string
  description?: string
  types: IType[]
  imageUrl?: string
}

export interface IType {
  title: string
  price: number
  imageUrl?: string
}

export interface IBasketItem {
  itemId: string
  typeIndex: number
}
