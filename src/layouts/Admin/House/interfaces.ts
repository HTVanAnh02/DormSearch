
export type IHouse={
    id:string
    housename:string;
    title:string;
    interior:string;
    price:string;
    acreage:string;
    addressHouses:string;
    dateSubmitted:string;
    photos:string;
    contact:string;
}
export type  IHouseGetAll= {
    items: [];
    totalItems: number;
}