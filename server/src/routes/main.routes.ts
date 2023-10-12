import { Router } from "express";
import userRoutes from "../app/user/user.router";
import postsRouter from "../app/posts/posts.router";

const router = Router();

router.use(userRoutes);
router.use(postsRouter);

export default router;
