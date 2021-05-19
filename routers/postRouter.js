import express from "express";
import { deletePost, editPost, postDetail, posts, upload } from "../controllers/postController";
import routes from "../routes";

const postRouter = express.Router();

postRouter.get(routes.posts, posts);
postRouter.get(routes.upload, upload);
postRouter.get(routes.postDetail, postDetail);
postRouter.get(routes.editPost, editPost);
postRouter.get(routes.deletePost, deletePost);

export default postRouter;