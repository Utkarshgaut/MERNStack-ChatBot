import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            return res.status(422).json({ errors: errors.array() });
        }
    };
};
const signupValidator = [
    body("Name").notEmpty().withMessage("Name is Required"),
    body("Email").trim().isEmail().withMessage("Email is Required"),
    body("Password").notEmpty().trim().isLength({ min: 8 }).withMessage("Password should contail at least 8 Character"),
];
export { validate, signupValidator };
//# sourceMappingURL=validators.js.map