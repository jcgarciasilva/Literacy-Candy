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
      main_text: i18n.t('site.main.main_text', { lang }),
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
    @Param('lang') lang: string
  ) {
    return res.status(200).render('team', {
      layout: 'main',
      url: req.url,
      gradient: true,
      lang: lang ? 'pt' : i18n.lang,
      title: i18n.t('site.title', { lang }),
      contact: i18n.t('site.contact', { lang }),
      team: i18n.t('site.team.title', { lang }),
      team_descriptios: i18n.t('site.team.description', { lang }),
      team_members1: i18n.t('site.team.members.0.description', { lang }),
      team_members2: i18n.t('site.team.members.1.description', { lang }),
      team_members3: i18n.t('site.team.members.2.description', { lang }),
      services_header: i18n.t('site.services.header', { lang }),
      services_desc_type1: i18n.t('site.services.desc.0.type', { lang }),
      services_desc_desc1: i18n.t('site.services.desc.0.description', { lang }),
      services_desc_type2: i18n.t('site.services.desc.1.type', { lang }),
      services_desc_desc2: i18n.t('site.services.desc.1.description', { lang }),
      services_desc_type3: i18n.t('site.services.desc.2.type', { lang }),
      services_desc_desc3: i18n.t('site.services.desc.2.description', { lang }),
      services_desc_type4: i18n.t('site.services.desc.3.type', { lang }),
      services_desc_desc4: i18n.t('site.services.desc.3.description', { lang }),
    })
  }

  @Get(['contos', ':lang/contos'])
  contos(
    @Req() req: Request,
    @Res() res: Response,
    @I18n() i18n: I18nContext,
    @Param('lang') lang: string
  ) {
    return res.render('contos', {
      layout: 'main',
      url: req.url,
      gradient: true,
      lang: lang ? 'pt' : i18n.lang,
      title: i18n.t('site.title', { lang }),
      contact: i18n.t('site.contact', { lang }),
      tales_header: i18n.t('site.tales.title', { lang }),
      tales_desc: i18n.t('site.tales.description', { lang }),
      tales_header_in: i18n.t('site.tales.title_in', { lang }),
      tales_desc_in: i18n.t('site.tales.description_in', { lang }),
      books: this.appService.getContos(i18n, lang),
    })
  }

  @Get(['novelas', ':lang/novelas'])
  novelas(@Res() res: Response, @I18n() i18n: I18nContext, @Param('lang') lang: string) {
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
}
