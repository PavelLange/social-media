import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module.js';
import expressLayouts from 'express-ejs-layouts';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Configure EJS
    app.setBaseViewsDir(join(process.cwd(), 'views'));
    app.setViewEngine('ejs');

    // Configure layouts
    app.use(expressLayouts);
    app.getHttpAdapter().getInstance().set('layout', 'layouts/main');

    // Serve CSS, images and other static files
    app.useStaticAssets(join(process.cwd(), 'public'));

    await app.listen(process.env.PORT ?? 3000);
}

await bootstrap();