import { Controller, Get, Render } from '@nestjs/common';
import { buildHomeViewModel, buildAboutViewModel } from './view-model';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHome() {
    return buildHomeViewModel();
  }

  @Get('about')
  @Render('about')
  getAbout() {
    return buildAboutViewModel();
  }
}
