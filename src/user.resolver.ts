import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserModel } from "./models/user.model";
import { Inject } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./models/user.dto";

@Resolver(of=>UserModel)
export class UserResolver{
  constructor(
    @Inject(UserService) private userService:UserService
  ) {}

  @Query(returns=>UserModel)
  async GetUser(@Args('id') id:string): Promise<UserModel>{
    return await this.userService.findOne(id)
  }
  @Mutation(returns=>UserModel)
  async CreateUser(@Args('user') user:CreateUserDto):Promise<UserModel>{
    return this.userService.createUser(user);
  }

}