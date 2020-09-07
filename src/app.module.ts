import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm'

import { Campaign, Creativity, Insertion, Media} from './db'
import { CampaignModule } from './campaign/campaign.module';
import { CampaignController } from './campaign/campaign.controller';
import { CampaignService } from './campaign/campaign.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [ Campaign, Creativity, Insertion, Media ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CampaignModule,
  ],
  controllers: [
    AppController,
    CampaignController,
  ],
  providers: [
    AppService,
    CampaignService
  ],
})

export class AppModule {
  constructor(
    private readonly connection: Connection
  ) { }
}
