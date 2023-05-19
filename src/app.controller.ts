import { Controller, Get, Param, Req, Res } from '@nestjs/common'
import { throws } from 'assert'
import { Request, Response } from 'express'
import { I18n, I18nContext, I18nLang, I18nService } from 'nestjs-i18n'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/', '/:lang'])
  index(
    @Req() req: Request,
    @Res() res: Response,
    @I18n() i18n: I18nContext,
    @I18nLang() lang: string
  ) {
    console.log(lang)
    return res.status(200).render('index', {
      layout: 'main',
      url: req.url,
      gradient: true,
      lang: lang ? 'pt' : i18n.lang,
      title: i18n.t('site.home'),
    })
  }

  @Get(['team', ':lang/team'])
  team(
    @Req() req: Request,
    @Res() res: Response,
    @I18n() i18n: I18nContext,
    @I18nLang() lang: string
  ) {
    return res.status(200).render('team', {
      layout: 'main',
      url: req.url,
      gradient: true,
      lang: lang ? 'pt' : i18n.lang,
      title: 'Literacy Candy',
    })
  }

  @Get(['novelas', ':lang/novelas'])
  novelas(@Res() res: Response, @I18n() i18n: I18nContext, @I18nLang() lang: string) {
    return res.render('novelas', {
      layout: 'main',
      title: 'Literacy Candy',
      lang: lang ? 'pt' : i18n.lang,
      books: this.appService.getNovels(),
    })
  }

  @Get(['receitas', ':lang/receitas'])
  receitas(@Res() res: Response, @I18n() i18n: I18nContext, @I18nLang() lang: string) {
    return res.render('receitas', {
      layout: 'main',
      title: 'Literacy Candy',
      lang: lang ? 'pt' : i18n.lang,
      books: this.appService.getRecepies(),
    })
  }

  @Get(['poesias', ':lang/poesias'])
  poesias(@Res() res: Response, @I18n() i18n: I18nContext, @I18nLang() lang: string) {
    return res.render('poesias', {
      layout: 'main',
      title: 'Literacy Candy',
      books: this.appService.getPoesias(),
    })
  }

  @Get(['contos', ':lang/contos'])
  contos(@Res() res: Response, @I18n() i18n: I18nContext, @I18nLang() lang: string) {
    return res.render('contos', {
      layout: 'main',
      title: 'Literacy Candy',
      books: this.appService.getContos(),
    })
  }
}
