import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Catalog } from './catalog.entity';

@Entity()
export class Parametrs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  length:number;

	@Column('int')
	width:number;

	@Column('int')
	height:number;

	@Column('int')
	weight:number;

	@Column({length:100})
	equipment:string;

	@Column({length:50})
	country:string;

	@OneToOne(() => Catalog)
  @JoinColumn()
  catalog: Catalog
}