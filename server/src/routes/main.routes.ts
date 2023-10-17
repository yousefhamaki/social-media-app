import { Router } from "express";
import userRoutes from "../app/user/user.router";
import postsRouter from "../app/posts/posts.router";
import followsRouter from "../app/follows/follows.router";

const router = Router();

router.use(userRoutes);
router.use(postsRouter);
router.use(followsRouter);

export default router;
