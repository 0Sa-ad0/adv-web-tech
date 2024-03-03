import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminServices } from './admin.services';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminServices],
})
export class AdminModule { }