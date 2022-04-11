import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message_board_id: number;

  @Column()
  parent_message_id: number;

  @Column()
  message: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
