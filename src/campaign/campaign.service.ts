import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCampaignDTO } from './dto/CreateCampaignDTO';
import { Campaign } from './campaign.entity';
import { UpdateCampaignDTO } from './dto/UpdateCampaignDTO';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>
  ) {}

  async create(dto: CreateCampaignDTO): Promise<Campaign> {
    const campaign = this.campaignRepository.create({
      timeStart: dto.timeStart,
      timeEnd: dto.timeEnd,
      name: dto.name,
    });

    return this.campaignRepository.save(campaign);
  }

  findAll(): Promise<Campaign[]> {
    return this.campaignRepository.find();
  }

  findById(id: number): Promise<Campaign> {
    return this.campaignRepository.findOne({
      where: {
        id: id,
      }
    });
  }

  async update (id: number, dto: UpdateCampaignDTO): Promise<Campaign> {
    const campaign = await this.campaignRepository.findOne({
      where: {
        id: Number(id),
      },
    });

    campaign.name = dto.name;
    campaign.timeStart = dto.timeStart;
    campaign.timeEnd = dto.timeEnd;
    campaign.active = dto.active;

    return this.campaignRepository.save(campaign);
  }

  delete(id: number) {
    return this.campaignRepository.delete({
      id: id,
    })
  }
}
