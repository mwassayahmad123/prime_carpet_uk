import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import { buildAreaViewModel, buildAreasHubViewModel } from './view-model';
import { AREA_PAGES } from './areas-data';

@Controller('areas')
export class AreasController {
  @Get()
  @Render('areas')
  getAreasHub() {
    return buildAreasHubViewModel();
  }

  @Get(':county/carpet-cleaning')
  @Render('area')
  getArea(@Param('county') county: string) {
    const area = AREA_PAGES.find((a) => a.slug === county);
    if (!area) {
      throw new NotFoundException(`Unknown area: ${county}`);
    }
    return buildAreaViewModel(area);
  }
}
