import { Request, Response } from "express";
import db from "../db/db.connection";

export const blogs_get = async (_, res: Response) => {
  const blogs = await db("blog").select("title");
  res.send(blogs.map(blog => blog.title));
};

export const blog_get = async (req: Request, res: Response) => {
  const blog = await db("blog").select("title").where("id", req.params.id);
  res.send(blog[0].title);
};

export const create_blog_post = async (req: Request, res: Response) => {
  const blog = await db("blog").insert(req.body, [req.body.id]);
  res.send(blog);
}