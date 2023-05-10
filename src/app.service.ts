import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPoesias(): Book[] {
    const poesiaBooks: Book[] = [];
    poesiaBooks.push({ title: '', description: '', downloadLink: '', image: 'book_marks.png' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '', image: 'book_marks.png' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '', image: 'book_marks.png' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '', image: 'book_marks.png' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '', image: 'book_marks.png' });
    poesiaBooks.push({ title: '', description: '', downloadLink: '', image: 'book_marks.png' });

    return poesiaBooks;
  }
  
}
