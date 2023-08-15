// dependencies
const UserService = require("../services/UserService")

// Controller
let UserController = {
    register: (req, res) => {
        return UserService.register(req, res);
    }
}

module.exports = UserController;