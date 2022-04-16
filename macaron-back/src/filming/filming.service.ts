import { Injectable } from '@nestjs/common';
import * as filming from './filming.json'

@Injectable()
export class FilmingService {

    findAll(): any {
        return filming;
    }

    findOneArr(Arr): any {
        let newData = [];
        for (let i = 0, length = filming.length ; i < length; i++) {
            let data = filming[i];

            if (data.properties.ardt_lieu == Arr) {
                newData.push(data)
            }
        }
        return newData
    }
}
