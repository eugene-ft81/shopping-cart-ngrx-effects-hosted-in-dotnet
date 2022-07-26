export interface Product {
    id:number,
    name:string,
    price:number,    
    description:string
}
export const products: Product[] = [
    {id:1,name:'P1',price:1,description:'P 1'},
    {id:2,name:'P2',price:2,description:'P 2'},
    {id:3,name:'P3',price:3,description:'P 3'}
];