import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('about')
  @Render('about')
  getAbout() {
    return {};
  }

  @Get('login')
  @Render('pages/login')
  getLogin() {
    return {}
  }
}
