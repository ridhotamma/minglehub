import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongoConfig, postgresConfig } from './config/database.config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConfig),
    MongooseModule.forRoot(mongoConfig.uri)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
