import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ManagerController } from 'src/manager/manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

/*@Module({
  imports: [AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/

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
  controllers: [ManagerController],
  providers: [],
})
export class AppModule { }

