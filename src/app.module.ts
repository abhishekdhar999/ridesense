// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from './entities/bike.entity';
import { BikeService } from './services/bike.service';
import { BikeController } from './controllers/bike.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bikes.db',
      entities: [Bike],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Bike]),
  ],
  controllers: [BikeController],
  providers: [BikeService],
})
export class AppModule {}
