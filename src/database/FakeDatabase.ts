export interface UserRequestDto {
  username: string;
}

export interface IUser extends UserRequestDto {
  id: number;
}

export interface IDatabaseState {
  users: IUser[];
}

class Database {
  private state: IDatabaseState = {
    users: [],
  };

  async create(user: Omit<IUser, "id">) {
    if (!user) {
      throw new Error("Missing userdata");
    }

    const createdUser = {
      id: this.state.users.length + 1,
      ...user,
    };

    this.state.users.push(createdUser);

    return createdUser;
  }

  async findById(id: number) {
    const users = await this.all();
    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new Error("Missing user");
    }

    return user;
  }

  async all() {
    return this.state.users;
  }

  public clear() {
    this.state.users = [];
  }
}

export default new Database();
