export interface IProduct{
	id:number;
	title:string;
	description:string;
	price:number;
	photo?:string;
	isActive:boolean;
	categoryId:number;
}

export interface ICreateProduct{
	title:string;
	description:string;
	price:number;
	photo?:string;
	categoryId:number;
}