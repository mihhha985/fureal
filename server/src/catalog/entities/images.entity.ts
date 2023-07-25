import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Catalog } from './catalog.entity';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;

	@Column({length:100})
	image:string;

	@Column({
		nullable:false,
		default:true
	})
	isActive:boolean;

	@ManyToOne(() => Catalog, (catalog) => catalog.images)
  catalog: Catalog;
}