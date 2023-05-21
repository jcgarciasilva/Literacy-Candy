import { Injectable } from '@nestjs/common'
import { I18nContext } from 'nestjs-i18n'

@Injectable()
export class AppService {
  getPoesias(): Book[] {
    const poesiaBooks: Book[] = []
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })

    return poesiaBooks
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

  getNovels(): Book[] {
    const poesiaBooks: Book[] = []
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })

    return poesiaBooks
  }

  getRecepies(): Book[] {
    const poesiaBooks: Book[] = []
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })
    poesiaBooks.push({
      title: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet accumsan velit. ',
      downloadLink: '',
      image: 'book_marks.png',
    })

    return poesiaBooks
  }
}
