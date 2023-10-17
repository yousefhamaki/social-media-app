import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("follows")
class FollowsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  from: string;

  @Column("uuid")
  to: string;

  @Column("character")
  status: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
}

export default FollowsEntity;
