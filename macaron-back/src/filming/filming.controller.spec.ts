import { Test, TestingModule } from '@nestjs/testing';
import { FilmingController } from './filming.controller';

describe('FilmingController', () => {
  let controller: FilmingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmingController],
    }).compile();

    controller = module.get<FilmingController>(FilmingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
