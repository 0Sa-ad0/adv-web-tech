import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Get('/index')
  getIndex(): string {
    return this.adminService.getIndex();
  }
  @Get('/users/:id')
  getUserById(@Param('id') id: string): object {
    return this.adminService.getUserById(id);
  }
  @Get('/users')
  getUserByNameandId(@Query('name') name:string,@Query('id') id:string ): object {
    return this.adminService.getUserByNameandId(name,id);

  }
  @Post('/add')
  addAdmin(@Body() myobj): object{
    return this.adminService.addAdmin(myobj);
  }
}
