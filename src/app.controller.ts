import { Controller, Get, Inject, Param, Query, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { I18n, I18nContext, I18nLang, I18nService } from 'nestjs-i18n'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18nService: I18nService
  ) {}

  @Get(['/', '/:lang'])
  index(
    @Req() req: Request,
    @Res() res: Response,
    @I18n() i18n: I18nContext,
    @Param('lang') lang: string
  ) {
    this.i18nService.resolveLanguage(lang)
    return res.status(200).render('index', {
      layout: 'main',
      url: req.url,
      gradient: true,
      lang: lang ? 'pt' : i18n.lang,
      title: i18n.t('site.title'),
      contact: i18n.t('site.contact'),
      main_title: i18n.t('site.main.title', { lang }),
      main_text: i18n.t('site.main.main_text',{ lang }),
      main_sub_text: i18n.t('site.main.sub_text', { lang }),
      main_button: i18n.t('site.main.button', { lang }),
      whoweare: i18n.t('site.whoweare.title', { lang }),
      whoweare_title1: i18n.t('site.whoweare.title1', { lang }),
      whoweare_description1: i18n.t('site.whoweare.description1', { lang }),
      whoweare_description2: i18n.t('site.whoweare.description2', { lang }),
      mission_header: i18n.t('site.mission.header', { lang }),
      mission_title: i18n.t('site.mission.title', { lang }),
      mission_description: i18n.t('site.mission.description', { lang }),
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
      lang: lang ? 'pt' : i18n.lang,
      books: this.appService.getPoesias(),
    })
  }

  @Get(['contos', ':lang/contos'])
  contos(@Res() res: Response, @I18n() i18n: I18nContext, @I18nLang() lang: string) {
    return res.render('contos', {
      layout: 'main',
      title: 'Literacy Candy',
      lang: lang ? 'pt' : i18n.lang,
      books: this.appService.getContos(),
    })
  }
}
