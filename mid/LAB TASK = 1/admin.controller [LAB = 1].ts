// LAB = 1

// ADMIN.CONTROLLER.TS

import { Controller, Get, Post, Put, Patch, Delete, Query, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.services';

@Controller('/admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Get()
    getAllAdmins(@Query() queryParams): any {
        const admins = this.adminService.getAllAdmins();
        return { admins, message: 'All admins retrieved successfully' };
    }

    @Get(':id')
    getAdminById(@Param('id') id: string): any {
        const admin = this.adminService.getAdminById(id);
        return { data: admin, message: 'Admin retrieved successfully' };
    }

    @Post()
    createAdmin(@Body() body): any {
        const newAdmin = this.adminService.createAdmin(body);
        return { newAdmin, message: 'Admin created successfully' };
    }

    @Put(':id')
    updateAdmin(@Param('id') id: string, @Body() body): any {
        const updatedAdmin = this.adminService.updateAdmin(id, body);
        return { data: updatedAdmin, message: 'Admin updated successfully' };
    }

    @Patch(':id')
    partialUpdateAdmin(@Param('id') id: string, @Body() body): any {
        const partialUpdatedAdmin = this.adminService.partialUpdateAdmin(id, body);
        return { data: partialUpdatedAdmin, message: 'Admin partially updated successfully' };
    }

    @Delete(':id')
    deleteAdmin(@Param('id') id: string): any {
        const deletedAdmin = this.adminService.deleteAdmin(id);
        return { data: deletedAdmin, message: 'Admin deleted successfully' };
    }

    @Get('/search')
    searchAdmins(@Query('query') query: string): any {
        const searchResults = this.adminService.searchAdmins(query);
        return { data: searchResults, message: 'Admins retrieved based on search query' };
    }

    @Put('/promote/:id')
    promoteAdmin(@Param('id') id: string): any {
        const promotedAdmin = this.adminService.promoteAdmin(id);
        return { data: promotedAdmin, message: 'Admin promoted successfully' };
    }

    @Patch('/suspend/:id')
    suspendAdmin(@Param('id') id: string, @Body() suspensionDetails): any {
        const suspendedAdmin = this.adminService.suspendAdmin(id, suspensionDetails);
        return { data: suspendedAdmin, message: 'Admin suspended successfully' };
    }
}