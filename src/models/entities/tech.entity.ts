import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tech_stack' })
export class Tech extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name_tech: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  picture: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  priority: number;

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
