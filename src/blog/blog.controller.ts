import { Request, Response } from "express";
import { Blog } from "./blog.interface";
import db from "../db/db.connection";

export const blogs_get = async (_, res: Response) => {
  const blogs = await db("blog").select("title");
  res.send(blogs.map((blog) => blog.title));
};

export const blog_get = async (req: Request, res: Response) => {
  const blog = await db("blog").select("title").where("id", req.params.id);
  res.send(blog[0].title);
};

export const create_blog_post = async (req: Request, res: Response) => {
  const blog: Blog = await db("blog")
    .insert(req.body)
    .returning(["title", "author", "content"]);
  res.status(201).send(blog[0].title);
};

export const update_blog_patch = async (req: Request, res: Response) => {
  const blog: Blog = await db("blog").where("id", req.params.id).update(req.body).returning(["content"]);
  res.send(blog[0].content);
}
