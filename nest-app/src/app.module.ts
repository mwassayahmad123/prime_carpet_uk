import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServicesController } from './services.controller';
import { BlogController } from './blog.controller';
import { AreasController } from './areas.controller';

@Module({
  controllers: [AppController, ServicesController, BlogController, AreasController],
})
export class AppModule {}
