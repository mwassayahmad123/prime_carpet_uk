import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import { buildServiceViewModel } from './view-model';
import { SERVICES_PAGES } from './services-data';

@Controller('services')
export class ServicesController {
  @Get(':slug')
  @Render('service')
  getService(@Param('slug') slug: string) {
    const service = SERVICES_PAGES.find((s) => s.slug === slug);
    if (!service) {
      throw new NotFoundException(`Unknown service: ${slug}`);
    }
    return buildServiceViewModel(service);
  }
}
