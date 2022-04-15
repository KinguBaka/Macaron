import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmingModule } from './filming/filming.module';

@Module({
  imports: [FilmingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
