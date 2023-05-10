import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPoesias(): Book[] {
    const poesiaBooks: Book[] = [];
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '' });

    return poesiaBooks;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
