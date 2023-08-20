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
import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';


@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}
	
  @Post()
  create(@Body() dto: CreateCatalogDto) {
    return this.catalogService.create(dto);
  }
	
  @Get()
  findAll() {
    return this.catalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateCatalogDto) {
    return this.catalogService.update(+id, dto);
  }
	@Put(':id')
	setStatus
		(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
		@Query('status', new ParseBoolPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) status: boolean
	){	
		return this.catalogService.setStatus(+id, status)
	}
}
