import User from "../models/user.model";

export const signup = async (req,res) => {
    const{ email, password, name } = req.body
    const userExists = await User.findOne({email});

    res.send("Sign up route called");
}

export const login = async (req,res) => {
    res.send("Log in route called");
}

export const logout = async (req,res) => {
    res.send("Log out route called");
}
