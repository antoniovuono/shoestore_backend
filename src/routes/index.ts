import { Router } from "express";

import { shoesRouter } from "./shoes.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/shoes", shoesRouter);

export { router };
