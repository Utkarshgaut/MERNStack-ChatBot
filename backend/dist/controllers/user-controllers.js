// first api request
import user from "../models/user.js";
import { hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    //get all user
    try {
        // get all users
        const users = await user.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    //get all user
    try {
        // get all users
        const { name, email, password } = req.body;
        // // Check for duplicate email
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ message: "Email already in use" });
        // }
        const hashedPassword = await hash(password, 10);
        const newUser = new user({ name, email, password: hashedPassword });
        await newUser.save();
        return res.status(200).json({ message: "OK", id: newUser._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map