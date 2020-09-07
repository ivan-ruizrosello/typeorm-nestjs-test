import {
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';

import {Campaign} from './Campaign';
import {Creativity} from './Creativity';

@Entity()
export class Insertion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float4')
  cpm: number;

  @Column('float4')
  budget: number;

  @Column()
  landingUrl: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;

  @OneToMany(type => Creativity, creativity => creativity.insertion)
  creativities: Creativity[];

  @ManyToOne(type => Campaign, campaign => campaign.insertions)
  @JoinColumn()
  campaign: Campaign;
}
