import { UserRepository } from "./User.repository";

// NOTE: Make userRepo public and not private. This is required for the tests!
export class UserService {
  constructor(private userRepo: UserRepository) {
    console.log("service");
  }

  getUsers(page: number, limit: number) {
    return this.userRepo.getUsers(page, limit);
  }

  // async getUser(id) {
  //   return userRepo.getUser(id);
  // },

  // async createUser(user) {
  //   return userRepo.createUser(user);
  // },

  // async updateUser(id, { email, username }) {
  //   return userRepo.updateUser(id, { email, username });
  // },

  // async deleteUser(id) {
  //   return userRepo.updateUser(id);
  // },
}
