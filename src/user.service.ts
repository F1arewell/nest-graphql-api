import { Injectable } from "@nestjs/common";
import { UserModel } from "./models/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./models/user.dto";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(UserModel)
    private userModel:Repository<UserModel>
  ) {}


  findOne(id:string):Promise<UserModel>{
    return this.userModel.findOne(id)
  }

  createUser(data:CreateUserDto):Promise<UserModel>{
    return this.userModel.save(data)
  }
}