//LAB TASK = 3

//ADMIN.CONTROLLER.TS

import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AdminServices } from "./admin.services";
import { AdminEntity } from "./admin.entity";

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminServices) { }

    @Post('CreateAsEntity')
    createUser(@Body() _body): Promise<AdminEntity> {
        return this.adminService.createUser(_body);
    }

    @Patch(':id/phone')
    modifyPhoneNumber(@Param('id') userId: any, @Body('phone') newPhone: number): Promise<AdminEntity> {
        return this.adminService.modifyPhoneNumber(userId, newPhone);
    }

    @Get('/null-full-name')
    getUsersWithNullFullName(@Body() fullName: string): Promise<AdminEntity[]> {
        return this.adminService.getUsersWithNullFullName(fullName);
    }

    @Delete(':id/deleteid')
    removeUserById(@Param('id') userId: number): Promise<void> {
        return this.adminService.removeUserById(userId);
    }
}

//localhost:3000/admin/CreateAsEntity [POST]
/*
{
    "phone": "77777"
}

{
    "fullName": "gdrg",
    "phone": "5635"
}
*/

//localhost:3000/admin/11/deleteid [DELETE]

//localhost:3000/admin/null-full-name [GET]

//localhost:3000/admin/10/phone [PATCH]
/*
{
    "phone": 11111
}
*/