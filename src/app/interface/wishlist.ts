export interface Wishlist {
    count:number,
    data:Data[],
}


interface Data {
    id:string,
    title:string,
    description:string,
    price:number,
    imageCover:string,
    ratingsQuantity:number,
    priceAfterDiscount:number

}


