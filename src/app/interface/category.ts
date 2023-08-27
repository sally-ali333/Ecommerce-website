export interface Category {
  name: string,
  image: string,
  _id:string
}

export interface SubCategory {
  name: string,
  category: string,
  _id:string
}