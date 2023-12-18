import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './db/db.config';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(dataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
