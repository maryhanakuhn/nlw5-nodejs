import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  //é chamado sempre que der um "new User"
  constructor() {
    //para verificar se vem com id preenchido.
    //Se vier sem id preenchido vai pegar o uuid
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
