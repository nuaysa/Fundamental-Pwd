import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "../../prisma/generated/client";
import { cloudinaryUpload } from "../services/cloudinary";

export class UserController {
    async getUSer (req: Request, res: Response){
        try {
            console.log(req.user)
            const { search, page = 1, limit = 3} = req.query;
            // const {user} = req.body//kurang aman soalnya bakal salha panggil kalau di body ada user lagi
            const filter: Prisma.UserWhereInput = {}
        if(search){
            // filter.username = {contains: search as string}
            filter.OR = [
                {username: {contains: search as string, mode: "insensitive"}},
                {email: {contains: search as string, mode: "insensitive"}}
            ]
        }
        const countUser = await prisma.user.aggregate({_count: {_all:true}})
        const total_page = Math.ceil(countUser._count._all / +limit)
        const users = await prisma.user.findMany(
            {where: filter,
            orderBy: {id: "asc"},
            take: +limit,
            skip: +limit * (+page - 1), 
        });

        res.status(200).send({total_page, page, users})

        }catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }

    async editUser(req:Request, res: Response){
        const {id} = req.params
        try{
            await prisma.user.update({data : req.body, where: {id: +id}})
            res.status(200).send("user has been edited ✅")
        }catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }

    async deleteUser (req:Request, res: Response){
        const {id} = req.params
        try{
            await prisma.user.delete({where: {id: +id}})
            res.status(200).send("user has been deleted ✅")
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }

    async getUserId(req: Request, res: Response){
        try {
            const users = await prisma.user.findUnique({where : {id: req.user?.id}})
            res.status(200).send({users})
        }catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }
    
    async createUser(req: Request, res: Response){
        try{
            await prisma.user.create({data: req.body})
            res.status(201).send("User has been created ✅")
        }catch(err) {
            console.log(err)
            res.status(400).send(err)
        }
    }

    async editAvatar (req: Request, res: Response){
        try{
            if(!req.file) throw { message : "No File Detected"};
            const link = `http://localhost:8000/api/public/avatar/${req.file.filename}`;
            await prisma.user.update({data: {avatar: link}, where: {id: req.user?.id}})
            console.log(req.file)
            res.status(200).send({message: 'avatar edited'})
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }

    async editAvatarCloud (req: Request, res: Response){
        try{
            if(!req.file) throw { message : "No File Detected"};
            const { secure_url } = await cloudinaryUpload( req.file, "avatar" )
            await prisma.user.update({
                data: {avatar: secure_url},
                where: {id: req.user?.id}
            })
            console.log(req.file)
            res.status(200).send({message: 'avatar edited'})
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }

}
