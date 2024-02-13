/*
Create 8 routes based on your user category features.
- Must create a folder and must have controller, 
service and module based on your user.
- Must follow the REST API standards (POST, GET, PUT, 
PATCH, DELETE)
- Must demonstrate uses of decorators like @Query, 
@Param, @Body
- The response must be in JSON Object.
*/

//admin.controller.ts
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { AdminServices } from "./admin.services";

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminServices) {}

    @Get('/admin')
    getAdminData(@Query() qry): object {
        return this.adminService.getAdminData(qry);
    }

    @Get('/user/:post')
    getuserpost(@Query() qry): object {
        return this.adminService.getuserpost(qry);
    }

    @Get('/admin/profile')
    adminprofile(@Query() qry): object {
        return this.adminService.adminprofile(qry);
    }

    @Put('address')
    updateaddress(@Query() qry): object {
        return this.adminService.updateaddress(qry);
    }

    @Post('/admin?')
    createAdmin(@Body() body): object {
        return this.adminService.createAdmin(body);
    }

    @Patch('/admin/:id')
    updateAdmin(@Param('id') id: string, @Body() body): object {
        return this.adminService.updateAdmin(id, body);
    }

    @Delete('/admin/:id')
    deleteAdmin(@Param('id') id: string): object {
        return this.adminService.deleteAdmin(id);
    }
}

//admin.services.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminServices {
    private admins: any[] = []; 

    createAdmin(_body: any): object {
        const newAdmin = {
            id: Math.random().toString(36).substring(2, 9), 
        };
        this.admins.push(newAdmin);
        return newAdmin;
    }

    updateAdmin(id: string, body: any): object {
        const index = this.admins.findIndex(admin => admin.id === id);
        if (index !== -1) {
            this.admins[index] = { ...this.admins[index], ...body };
            return this.admins[index];
        }
        return null; 
    }

    deleteAdmin(id: string): object {
        const index = this.admins.findIndex(admin => admin.id === id);
        if (index !== -1) {
            const deletedAdmin = this.admins.splice(index, 1)[0];
            return deletedAdmin;
        }
        return null;
    }

    getAdminData(qry: { name: string; usertype: string; post: any; file: any; date: any }): object {
        return { 
            name: qry.name + "(" + qry.usertype + ')' ,
            post: qry.post, 
            upload: qry.file,
            date: qry.date,
        };
    }

    getuserpost(qry: { name: any; id: any; dept: any; address: any }): object {
        return {
            name: qry.name,
            id: qry.id,
            dept: qry.dept,
            address: qry.address,
        };
    }

    adminprofile(qry: any): object {
        const adminId = qry.adminId; 
        const adminProfile = {
            id: adminId,
            name: qry.name,
            email: qry.email,
        };
        return adminProfile;
    }

    updateaddress(qry: any): object {
        const adminId = qry.adminId;
        const newAddress = qry.newAddress;
        return { message: `Address updated for admin ${adminId} to ${newAddress}` };
    }
}

//admin.module.ts
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminServices } from './admin.services';

@Module({
  controllers: [AdminController],
  providers: [AdminServices],
})
export class AdminModule {}
















