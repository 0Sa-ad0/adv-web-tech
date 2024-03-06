//LAB TASK = 3

//APP.MODULE.TS

import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AdminModule,
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'saad',
        database: 'ATP',//Change to your database name
        autoLoadEntities: true,
        synchronize: true,
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
