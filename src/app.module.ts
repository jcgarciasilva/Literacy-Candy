import { Module } from '@nestjs/common'
import { I18nModule, QueryResolver, I18nJsonLoader } from 'nestjs-i18n'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import * as path from 'path'

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'pt',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        includeSubfolders: true,
        watch: true,
      },
      loader: I18nJsonLoader,
      viewEngine: 'hbs',
      resolvers: [{ use: QueryResolver, options: ['lang'] }],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
