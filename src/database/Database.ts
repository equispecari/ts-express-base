export interface Database {
  storeData(data: any): void;
}

export interface RemoteDatabase {
  connect(uri: string): void;
}
