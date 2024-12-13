import { Request, Response } from "express"
import prisma from "../prisma"
import {Prisma} from "../../prisma/generated/client"

export class BlogController {
    async getBlogs(req: Request, res: Response){
        try{
            const { search } = req.query;
            const filter : Prisma.BlogWhereInput = {}
            if(search){
                filter.title = { contains: search as string, mode : "insensitive"}
            }
            const blogs = await prisma.blog.findMany({
                // include {user:true},
                select: {
                    id: true,
                    title: true,
                    thumbnail: true,
                    category:true, 
                    slug: true, 
                        user :{
                            select:{
                                username: true,
                                email: true,
                                avatar:true
                                    }
                            }
                        }
            })
            res.status(200).send(blogs)
        }
        catch(err){
            console.log(err)
            res.status(500).send(err)
        }
    }

    async getBlogSlug(req: Request, res: Response) {
        try{
            const { slug } = req.params
            const blog = await prisma.blog.findUnique({
                where: { slug: slug },
                //yang pertama dari prisma, yang satunya dari params
                select: {
                    id: true,
                    title: true,
                    category: true,
                    thumbnail: true,
                    slug: true,
                    createdAt: true,
                    content: true,
                    user:{
                        select:{
                            username: true,
                        },
                    }
                }
            })
            res.status(200).send(blog)
        }
        catch(err){
            console.log(err)
            res.status(500).send(err)
        }
    }
}