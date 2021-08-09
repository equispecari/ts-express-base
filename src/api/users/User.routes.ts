import { Router } from "express";
import { userController } from "./index";

const router: Router = Router();

router.get("/", userController.getuser);

export default router;
