//LAB TASK = 2

//ADMIN.SERVICES.TS

import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    adduser(_data: object): object {
        return _data;
    }
}