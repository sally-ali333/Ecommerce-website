export interface Product {
    title:string,
    sold:number,
    description:string,
    price:number,
    priceAfterDiscount:number,
    quantity:number;
    imageCover:string,
    images?:string[],
    ratingsAverage:number,
    id:string,
    category:Category,
    subcategory:Subcategory,
    brand:Brand
}

 interface Category {
    _id:string,
    name:string,
    image:string
}

interface Subcategory {
    _id:string,
    name:string
}

interface Brand {
    _id:string,
    name:string
}




