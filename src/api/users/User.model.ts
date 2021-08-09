import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>("User", userSchema);
