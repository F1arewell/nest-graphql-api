import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class UserModel {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Field()
  @Column({length:20,nullable:false})
  name:string

}