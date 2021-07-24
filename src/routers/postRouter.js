import express from "express";
import { postDetail, getEditPost, postEditPost, getUpload, postUpload, deletePost } from "../controllers/postController";
import { protectorMiddleware, videoUpload } from "../middleware";

const postRouter = express.Router();

postRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(videoUpload.single("video"), postUpload);
postRouter.get("/:id", postDetail);
postRouter.route("/:id/edit").all(protectorMiddleware).get(getEditPost).post(postEditPost);
postRouter.route("/:id/delete").all(protectorMiddleware).get(deletePost);

export default postRouter;