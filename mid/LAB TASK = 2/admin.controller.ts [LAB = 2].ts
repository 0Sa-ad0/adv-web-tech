//LAB TASK = 2

//ADMIN.CONTROLLER.TS

import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.services';
import { AdminDTO } from './admin.dto';

@Controller('/user')
export class AdminController {
    constructor(private readonly user1Service: AdminService) { }

    @Post('/adduser')
    @UsePipes(new ValidationPipe())
    addUser1(@Body() myobj: AdminDTO): object {
        return this.user1Service.adduser(myobj);
    }
}

//localhost: 3000 / user / adduser [POST]
/*
{
    "name": "saad",
    "mail": "saad@gmail.xyz",
    "password": "saad@",
    "phone": "01234567890",
    "date": "2024-03-07",
    "socialMediaLink": "www.fb.com/saad"
}
*/

