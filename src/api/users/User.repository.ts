import Database, { UserRequestDto } from "../../database/FakeDatabase";
import UserModel, { IUser } from "./User.model";
import { Schema, Model, Document } from "mongoose";

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  // constructor(private userModel: Model<IUser>) {
  //   console.log("repo");
  // }
  private readonly userModel: any = [{ id: 1, name: "edwin" }];

  getUsers(page: number, limit: number) {
    try {
      // const users = await this.userModel
      //   .find({})
      //   .skip(page * limit)
      //   .limit(limit);
      return this.userModel;
    } catch (error) {
      console.log(error.message);
      throw new Error("Database Not Connect.");
    }
  }
}
