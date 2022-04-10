import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SampleTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  app_name: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
