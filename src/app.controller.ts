import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['index', '/'])
  index(@Res() res: Response) {
    return res.status(200).render('index', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('novelas')
  novelas(@Res() res: Response) {
    return res.render('novelas', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('receitas')
  receitas(@Res() res: Response) {
    return res.render('receitas', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('poesias')
  poesias(@Res() res: Response) {
    return res.render('poesias', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('contos')
  contos(@Res() res: Response) {
    return res.render('contos', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }
}
