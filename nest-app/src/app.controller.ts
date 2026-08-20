import { Controller, Get, Render } from '@nestjs/common';
import { buildHomeViewModel } from './view-model';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHome() {
    return buildHomeViewModel();
  }
}
