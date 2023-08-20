export interface ICategory {
	id:number;
	name:string;
	order:number;
	isActive:boolean;
}

export interface ICreateCategory {
	name: string;
  order?:number;
}

export interface ICategorySelected{
	id?:number;
	label?:string;
}