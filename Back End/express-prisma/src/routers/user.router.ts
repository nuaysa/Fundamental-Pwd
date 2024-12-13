import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { verifyToken } from "../middleware/verify";
import { uploader } from "../services/uploader";

export class UserRouter {
    private userController: UserController
    private router: Router

    constructor() {
        this.userController = new UserController()
        this.router = Router()   
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get("/", verifyToken, this.userController.getUSer)
        this.router.get("/profile", verifyToken, this.userController.getUserId)
        this.router.post("/", this.userController.createUser)
        this.router.patch("/avatar", uploader("diskStorage", "avatar-","/avatar").single("file"), this.userController.editAvatar), verifyToken
        this.router.patch("/avatar-cloud", uploader("memoryStorage", "avatar").single("file"), this.userController.editAvatar), verifyToken

        this.router.patch("/:id", this.userController.editUser)
        this.router.delete("/:id", this.userController.deleteUser)
    }

    getRouter() : Router{
        return this.router;
    }
}