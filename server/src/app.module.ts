import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from './catalog/catalog.module';
import {dataSourceOptions} from 'db/orm.config';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
		TypeOrmModule.forRoot(dataSourceOptions),
		CatalogModule,
		CategoryModule,
	],
})
export class AppModule {}