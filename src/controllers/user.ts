import UserService from "@services/users";
import express from "express";

class UserController {
    static getUser = async (req: express.Request, res: express.Response) => {
        console.log("AAAA")
        const data = await UserService.getUser();
        res.send({ data }); 
    }
}

export default UserController;

