
export type IBodyUser = {
    email?: string;
    password?: string;
    name?: string;
    role?: string;
    avatar?: string;
    birthday?: string;
};
export type IHouse={
    id:string
    housename:string;
    title:string;
    price:number;
    interior:string;
    addresshouses:string;
}
export type  IHouseGetAll= {
    items: [];
    totalItems: number;
}