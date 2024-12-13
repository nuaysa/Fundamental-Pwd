"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.ValidateRegister = [
    (0, express_validator_1.body)("username").notEmpty()
        .withMessage("username is required"),
    (0, express_validator_1.body)("email").isEmail()
        .withMessage("invalid email format")
        .notEmpty()
        .withMessage("email is required"),
    (0, express_validator_1.body)("password").notEmpty()
        .withMessage("password is required")
        .isLength({ min: 3 })
        .withMessage("Password must be 3 characters at minimum"),
    // .isStrongPassword({ minLength: 3 }),
    (0, express_validator_1.body)("confirmPassword").notEmpty()
        .withMessage("confirm password is requiore")
        .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Password doesnt't match");
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            // return res.status(400).send({errors: errors.array()});
        }
        next();
    }
];
