import { Controller, Get, Param} from '@nestjs/common';
import { FilmingService } from './filming.service';

// localhost:3000/filming
@Controller('filming')
export class FilmingController {
    constructor(private readonly filmingService: FilmingService) {}

    @Get()
    findAll(): Promise<any[]> {
        return this.filmingService.findAll();
    }

    @Get(':arr')
    findOneArr(@Param('arr') arr: string) {
        return this.filmingService.findOneArr(arr)
    }
}
