import UserModel from "./User.model";
import { UserRepository } from "./User.repository";
import { UserService } from "./User.service";
import { UserController } from "./User.controller";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController2 = new UserController(userService);

export const userController = userController2;

async function test() {
  const a = await userService.getUsers(1, 2);
  console.log(a);
}

test();
