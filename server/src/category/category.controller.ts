import {
	HttpStatus,
	ParseBoolPipe,
	ParseIntPipe, 
	Controller, 
	Get, 
	Post, 
	Put, 
	Body, 
	Patch, 
	Param, 
	Query 
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(
		@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  update(
		@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
		@Body() dto: UpdateCategoryDto
	) {
    return this.categoryService.update(id, dto);
  }

  @Put(':id')
	setStatus
		(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
		@Query('status', new ParseBoolPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) status: boolean
	){	
		return this.categoryService.setStatus(+id, status)
	}
}
