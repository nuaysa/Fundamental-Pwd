import { NextFunction  } from "express";
import { body, validationResult } from "express-validator";

export const ValidateRegister = [
    body("username").notEmpty()
    .withMessage("username is required"),
    body("email").isEmail()
    .withMessage("invalid email format")
    .notEmpty()
    .withMessage("email is required"),
    body("password").notEmpty()
    .withMessage("password is required")
    .isLength({min:  3})
    .withMessage("Password must be 3 characters at minimum"),
    // .isStrongPassword({ minLength: 3 }),
    body("confirmPassword").notEmpty()
    .withMessage("confirm password is requiore")
    .custom((value, {req}) => {
        if(value !== req.body.password ){
            throw new Error("Password doesnt't match")
        }
        return true
    }),

    
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(400).send({errors: errors.array()});
        }
        next()
    }
]