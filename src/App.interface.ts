export interface IItem {
  id: number
  title: string
  description?: string
  size: TItemSize
  imageUrl?: string
}

type TItemSize = 'Small' | 'Medium' | 'Big'
