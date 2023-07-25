import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
	constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto):Promise<void> {
    const category = this.categoryRepository.create(dto);
		await this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({id});
  }
	
  async update(id: number, dto: UpdateCategoryDto) {
    return await this.categoryRepository.update(id, dto);
  }

  async remove(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
