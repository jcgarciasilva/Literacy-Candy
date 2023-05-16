import { Module } from '@nestjs/common'
import { I18nModule } from 'nestjs-i18n'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import * as path from 'path'

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'pt',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      viewEngine: 'hbs',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
