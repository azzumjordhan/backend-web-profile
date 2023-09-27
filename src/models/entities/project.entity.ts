import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'project' })
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  subtitle: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  keyword: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  image: string;

  @CreateDateColumn({
    type: 'datetime',
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'datetime',
    nullable: false,
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: 'datetime',
    nullable: false,
  })
  deleted_at: Date;
}
