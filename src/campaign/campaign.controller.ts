import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateCampaignDTO } from './dto/CreateCampaignDTO';
import { UpdateCampaignDTO } from './dto/UpdateCampaignDTO';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign.entity';



@Controller('campaign')
export class CampaignController {
  constructor(
    private readonly campaignService: CampaignService
  ) {}

  @Get()
  findAll(): Promise<Campaign[]> {
    return this.campaignService.findAll();
  }

  @Get(':id')
  findById(@Param('id')  id: number) {
    return this.campaignService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateCampaignDTO) {
    return this.campaignService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string , @Body() dto: UpdateCampaignDTO) {
    return this.campaignService.update(Number(id), dto);
  }

  @Delete(':id')
  deleteOne (@Param('id') id: number) {
    return this.campaignService.delete(id);
  }

}
