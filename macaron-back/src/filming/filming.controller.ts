import { Controller, Get } from '@nestjs/common';
import { FilmingService } from './filming.service';

// localhost:3000/filming
@Controller('filming')
export class FilmingController {
    constructor(private readonly filmingService: FilmingService) {}

    @Get()
    findAll(): Promise<any[]> {
        return this.filmingService.findAll();
    }
}
