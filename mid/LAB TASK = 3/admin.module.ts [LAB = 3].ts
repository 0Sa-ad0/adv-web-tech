//LAB TASK = 3

//ADMIN.MODULE.TS

import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminServices } from './admin.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity]),],
  controllers: [AdminController],
  providers: [AdminServices],
})
export class AdminModule { }
