import { Test, TestingModule } from '@nestjs/testing';
import { FilmingService } from './filming.service';

describe('FilmingService', () => {
  let service: FilmingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmingService],
    }).compile();

    service = module.get<FilmingService>(FilmingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
