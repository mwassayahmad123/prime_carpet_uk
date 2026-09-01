import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServicesController } from './services.controller';

@Module({
  controllers: [AppController, ServicesController],
})
export class AppModule {}
