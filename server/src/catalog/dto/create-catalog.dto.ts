export class CreateCatalogDto {
	id:number;
	title:string;
	description:string;
	price:number;
	photo?:string;
	isActive:boolean;
	categoryId:number;
}
