export interface IBaseItem {
  name: string
  description: string
  price: number
  image: string
}

export interface IItem extends IBaseItem {
  id: number
}
