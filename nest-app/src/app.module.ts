import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServicesController } from './services.controller';
import { BlogController } from './blog.controller';

@Module({
  controllers: [AppController, ServicesController, BlogController],
})
export class AppModule {}
