import User from "../models/User";

class UserController{
    async store(req, res){
        const user = req.body

        return res.json(user)
    }
}

export default new UserController();