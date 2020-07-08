export interface IItem {
  id: number
  title: string
  description?: string
  prices: IPrice[]
  imageUrl?: string
}

export interface IPrice {
  title: string
  price: number
}
