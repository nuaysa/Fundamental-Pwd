import { PostController } from "../controllers/post.controller";
import { Router } from "express";

export class PostRouter {
    private postController : PostController;
    private router :  Router;

    constructor(){
        this.postController = new PostController();
        this.router = Router();
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get("/", this.postController.getPost);
    }

    getRouter() : Router{
        return this.router;
    }
}