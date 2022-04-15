import { Module } from '@nestjs/common';
import { FilmingController } from './filming.controller';
import { FilmingService } from './filming.service';

@Module({
  controllers: [FilmingController],
  providers: [FilmingService]
})
export class FilmingModule {}
