import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,  OneToMany, OneToOne } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Parametrs } from './parametrs.entity';
import { Images } from './images.entity';

@Entity()
export class Catalog{
	@PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price:number;

	@Column({
		length:200,
		nullable:true,
	})
	photo:string;

	@Column({
		nullable:false,
		default:true
	})
	isActive:boolean;

	@OneToOne(() => Parametrs, (parametrs) => parametrs.catalog)
  parametrs:Parametrs;

	@OneToMany(() => Images, (images) => images.catalog)
	images:Images[];

	@ManyToOne(() => Category, (category) => category.catalog)
	category:Category;
}
