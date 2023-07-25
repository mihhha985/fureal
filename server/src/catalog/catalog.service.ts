import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './entities/catalog.entity';


@Injectable()
export class CatalogService {
	constructor(
    @InjectRepository(Catalog)
    private catalogRepository: Repository<Catalog>,
  ) {}

	findAll(): Promise<Catalog[]> {
    return this.catalogRepository.find();
  }

  findOne(id: number): Promise<Catalog | null> {
    return this.catalogRepository.findOne({
			where:{id:id},
			relations:{
				parametrs:true,
				images:true,
			}
		})
  }
}
