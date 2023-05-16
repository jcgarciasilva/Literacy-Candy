import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'
import * as hbs from 'express-handlebars'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))

  const ehbs = hbs({
    extname: 'hbs',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    helpers: require('handlebars-helpers')(),
    partialsDir: join(__dirname, '..', 'views/partials'),
    defaultLayout: 'main',
    layoutsDir: join(__dirname, '..', 'views/layouts'),
  })
  app.engine('hbs', ehbs)

  app.setViewEngine('hbs')
  await app.listen(3000)
}
bootstrap()
