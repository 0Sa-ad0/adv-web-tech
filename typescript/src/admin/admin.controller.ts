import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminServices } from "./admin.services";
import { AdminDTO } from "./admin.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Multer } from 'multer';
import { MulterError, diskStorage } from "multer";
import { Express } from 'express'



@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminServices) { }

    @Get()
    getAdminData(@Query() qry): object {
        return this.adminService.getAdminData(qry);
    }

    @Get('/user/post')
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
    createadmin(@Body() body): object {
        return this.adminService.createAdmin(body);
    }

    @Patch('/admin/:id')
    updateAdmin(@Param('id') id: string, @Body() body): object {
        return this.adminService.updateAdmin(id, body);
    }

    @Delete('/admin/id')
    deleteAdmin(@Param('id') id: string): object {
        return this.adminService.deleteAdmin(id);
    }

    @Post('adduser')
    @UseInterceptors(FileInterceptor('myfile',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 30000 },
            storage: diskStorage({
                destination: './upload',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }
    ))

    @Post('/pipe')
    @UsePipes(new ValidationPipe())
    createAdmin(@Body() body: AdminDTO, @UploadedFile() myfile: Express.Multer.File): Promise<AdminDTO> {
        console.log(body.name);
        return this.adminService.createAdmin(body);
    }

    @Get('/getimage/:name')
    getImages(@Param('name') name: string, @Res() res) {
        res.sendFile(name, { root: './upload' })
    }
}

