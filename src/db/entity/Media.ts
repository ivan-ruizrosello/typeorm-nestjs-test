import {
  Entity, BaseEntity, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  alternativeText: string;

  @Column({ nullable: true })
  caption: string;

  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true })
  height: number;

  // @Column()
  // hash: string;

  @Column({ nullable: true })
  ext: string;

  @Column()
  mime: string;

  @Column()
  size: number;

  @Column()
  url: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
