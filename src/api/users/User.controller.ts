import { Router, Request, Response } from "express";
import { UserService } from "./User.service";

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {
  router: Router;

  constructor(private readonly userService: UserService) {
    this.router = Router();
  }

  public getUsers() {
    return this.userService.getUsers(1, 1);
  }

  getuser = (req: Request, res: Response) =>
    res.send({ ...this.getUsers(), lastname: "QC" });

  routes() {
    this.router.get("/", (req: Request, res: Response) =>
      res.send(this.getUsers())
    );

    return this.router;
  }

  // getUsers(req: Request, res: Response) {
  //   const page = parseInt((req.query.page || 0).toString(), 10);
  //   const limit = parseInt((req.query.limit || 10).toString(), 10);

  //   console.log(page, limit);
  //   // const users = await this.userService.getUsers(page, limit);
  //   const users = this._service2;

  //   return res.send(null);
  // }
}
