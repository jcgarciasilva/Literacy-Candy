import { Injectable } from '@nestjs/common'
import { I18nContext } from 'nestjs-i18n'

@Injectable()
export class AppService {
  getPoesias(i18n: I18nContext, lang: string): Book[] {
    const books: Book[] = []
    books.push({
      title: i18n.t('site.poetry.books.0.title', { lang }),
      description: i18n.t('site.poetry.books.0.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFgwN-AlhQ/XECjAaCZ5rCm2Xw5hlT5Hw/edit?utm_content=DAFgwN-AlhQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../20_poemas_de_Cecília_Meirelles.png',
    })

    return books
  }

  getContos(i18n: I18nContext, lang: string): Book[] {
    const books: Book[] = []
    books.push({
      title: i18n.t('site.tales.books.0.title', { lang }),
      description: i18n.t('site.tales.books.0.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFjFyVXojc/jylZGgyR-VnSDwe3sd7hSA/edit?utm_content=DAFjFyVXojc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../A bruxa_e_o_caldeirao.png',
    })
    books.push({
      title: i18n.t('site.tales.books.1.title', { lang }),
      description: i18n.t('site.tales.books.1.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFiWUnb5AE/j_3D3LPFS3EWbIasy5uU3w/edit?utm_content=DAFiWUnb5AE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Cappucceto_Rosso.png',
    })
    books.push({
      title: i18n.t('site.tales.books.2.title', { lang }),
      description: i18n.t('site.tales.books.2.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFg3UgsJnI/L9N_vnOlw0NBKBJloalZiw/edit?utm_content=DAFg3UgsJnI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Hansel__and_Gretel.png',
    })
    return books
  }

  getNovels(i18n: I18nContext, lang: string): Book[] {
    const poesiaBooks: Book[] = []
    poesiaBooks.push({
      title: i18n.t('site.novel.books.0.title', { lang }),
      description: i18n.t('site.novel.books.0.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFjLioN35c/Dc6lIoz_xnk1LdvrnRijdQ/edit?utm_content=DAFjLioN35c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Novela_grafica.png',
    })
    return poesiaBooks
  }

  getRecepies(i18n: I18nContext, lang: string): Book[] {
    const books: Book[] = []
    books.push({
      title: i18n.t('site.receipes.books.0.title', { lang }),
      description: i18n.t('site.receipes.books.0.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFicqVHI9w/no3doyDDBtiUOysZ6OLiSQ/edit?utm_content=DAFicqVHI9w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Cookies.png',
    })
    books.push({
      title: i18n.t('site.receipes.books.1.title', { lang }),
      description: i18n.t('site.receipes.books.1.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFiciuU3-k/Wgsb8qMxvGyH_ocm9-h35A/edit?utm_content=DAFiciuU3-k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Donut_de_Maca.png',
    })
    books.push({
      title: i18n.t('site.receipes.books.2.title', { lang }),
      description: i18n.t('site.receipes.books.2.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFickL9_A4/FW9xD7AcdpIrRzmRs5QM4Q/edit?utm_content=DAFickL9_A4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Hamburguer_de_espinafre.png',
    })
    books.push({
      title: i18n.t('site.receipes.books.3.title', { lang }),
      description: i18n.t('site.receipes.books.3.resume', { lang }),
      downloadLink:
        'https://www.canva.com/design/DAFiWuctlJ0/1xtiiUyF9TxBHfKKgDe0Kw/edit?utm_content=DAFiWuctlJ0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: '../Noodle.png',
    })
    return books
  }
}
