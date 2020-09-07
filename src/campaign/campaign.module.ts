import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { Campaign } from './campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  providers: [CampaignService],
  controllers: [CampaignController],
  exports: [TypeOrmModule]
})
export class CampaignModule {}
