import { body, validationResult } from "express-validator";
export const validate = (validations) => {
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
export const loginValidator = [
    body("Email").trim().isEmail().withMessage("Email is Required"),
    body("Password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contail at least 6 Character"),
];
export const signupValidator = [
    body("Name").notEmpty().withMessage("Name is Required"),
    ...loginValidator,
];
//# sourceMappingURL=validators.js.map