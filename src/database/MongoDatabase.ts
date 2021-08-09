// @ts-nocheck
import { Database, RemoteDatabase } from "./Database";

import mongoose, { ConnectOptions } from "mongoose";

export class MongoDatabase implements Database, RemoteDatabase {
  private uri: string;
  private options: ConnectOptions;

  constructor(metaData: { uri: string; options?: ConnectOptions }) {
    this.uri = metaData.uri;
    this.options = metaData.options ? metaData.options : {};
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log("Database is conected");
    } catch (error) {
      console.log(error.message);
      throw new Error("Database Not Connect.");
    }
  }
  storeData(data: any): void {
    console.log("Method not implemented.");
  }
}
