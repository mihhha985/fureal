import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './entities/catalog.entity';
import { CreateCatalogDto } from './dto/create-catalog.dto';


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

	async create(dto:CreateCatalogDto): Promise<void>{
		try{
			const category = this.catalogRepository.create(dto);
			await this.catalogRepository.save(category);
		}catch(err){
			throw err;
		}
	}

	async update(id: number, dto:CreateCatalogDto) {
    return await this.catalogRepository.update(id, dto);
  }

	async setStatus(id: number, status: boolean):Promise<void>{
		await this.catalogRepository.update(id, {isActive: !status});
	}
}
