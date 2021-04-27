import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  //para verificar se vem com id preenchido.
  //Se vier sem id preenchido vai pegar o uuid
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting };
