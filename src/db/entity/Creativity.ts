import {
  Entity, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne,
} from 'typeorm';

import {Insertion} from './Insertion';
import {Media} from './Media';

@Entity()
export class Creativity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;

  @ManyToOne(type => Insertion, insertion => insertion.creativities)
  insertion: Insertion;

  @ManyToOne(type => Media, media => media.id)
  @JoinColumn()
  media: Media;
}
