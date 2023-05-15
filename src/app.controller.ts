import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['index', '/'])
  index(@Req() req: Request, @Res() res: Response) {
    return res.status(200).render('index', {
      layout: 'main',
      url: req.url,
      gradient: true,
      title: 'Literacy Candy',
    });
  }

  @Get(['team'])
  team(@Req() req: Request, @Res() res: Response) {
    return res.status(200).render('team', {
      layout: 'main',
      url: req.url,
      gradient: true,
      title: 'Literacy Candy',
    });
  }

  @Get('novelas')
  novelas(@Res() res: Response) {
    return res.render('novelas', {
      layout: 'main',
      title: 'Literacy Candy',
      books: this.appService.getNovels(),
    });
  }

  @Get('receitas')
  receitas(@Res() res: Response) {
    return res.render('receitas', {
      layout: 'main',
      title: 'Literacy Candy',
      books: this.appService.getRecepies(),
    });
  }

  @Get('poesias')
  poesias(@Res() res: Response) {
    return res.render('poesias', {
      layout: 'main',
      title: 'Literacy Candy',
      books: this.appService.getPoesias(),
    });
  }

  @Get('contos')
  contos(@Res() res: Response) {
    return res.render('contos', {
      layout: 'main',
      title: 'Literacy Candy',
      books: this.appService.getContos(),
    });
  }
}
