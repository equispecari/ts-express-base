import { Router } from "express";

import users from "../api/users/User.routes";

const router = Router();

router.use("/users", users);

export default router;
