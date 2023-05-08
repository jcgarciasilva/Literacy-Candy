import { Get, Controller, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['index', '/'])
  @Render('index')
  index(@Res() res: Response) {
    return res.render('index', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('novelas')
  @Render('novelas')
  novelas(@Res() res: Response) {
    return res.render('novelas', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('receitas')
  @Render('receitas')
  receitas(@Res() res: Response) {
    return res.render('receitas', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('poesias')
  @Render('poesias')
  poesias(@Res() res: Response) {
    return res.render('poesias', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }

  @Get('contos')
  @Render('contos')
  contos(@Res() res: Response) {
    return res.render('contos', {
      layout: 'main',
      title: 'Literacy Candy',
    });
  }
}
