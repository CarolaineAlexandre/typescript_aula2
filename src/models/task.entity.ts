import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity() //o que for criado é uma entidade
export default class Task extends BaseEntity { //
  @PrimaryGeneratedColumn() 
  id!: number //! é obrigatório

  @Column()
  title!: string

  @Column({default: false}) //se eu ão preencher o campo ele dá como false
  completed!: boolean 
}