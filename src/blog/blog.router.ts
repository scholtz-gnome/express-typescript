import * as express from "express";
import { Router } from "express";
import { blogs_get, blog_get, create_blog_post, update_blog_patch, delete_blog } from "./blog.controller";

const blogRouter: Router = express.Router();

blogRouter.get("/", blogs_get);
blogRouter.get("/:id", blog_get);
blogRouter.post("/", create_blog_post);
blogRouter.patch("/:id", update_blog_patch);
blogRouter.delete("/:id", delete_blog);

export default blogRouter;
