import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hbs = require('hbs');

function registerPartialsSync(partialsDir: string) {
  for (const entry of readdirSync(partialsDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.hbs')) continue;
    const name = entry.name.slice(0, -'.hbs'.length);
    const content = readFileSync(join(partialsDir, entry.name), 'utf8');
    hbs.handlebars.registerPartial(name, content);
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  registerPartialsSync(join(__dirname, '..', 'views', 'partials'));
  app.setViewEngine('hbs');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`Prime Carpet Cleaning app running on http://localhost:${port}`);
}
bootstrap();
