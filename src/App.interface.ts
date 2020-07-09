export interface IItem {
  id: number
  title: string
  description?: string
  types: IType[]  
  imageUrl?: string
}

export interface IType {
  title: string
  price: number
}
