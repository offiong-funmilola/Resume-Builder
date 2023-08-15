const Bcrypt = require("bcryptjs");
const Database = require("../lib/database");
const SALT_ROUNDS = 10;

const DB = Database.Connect();

let UserService = {
    login: async (req, res) => {
        const { email, password } = req.body
        let userExist = this.validateUser(email, password)
        if (userExist) {
            return res.status(200).json({
                success: true,
                user: userExist.purge()
            })
        }
        return res.status(401).json({
            success: false,
            error: 'Incorrect User login details'
        })
    },

    register: async (req, res) => {
        const { email, password } = req.body
        let userExist = await DB.USER.findOne({ where: { email }});
        if (userExist) {
            return res.status(401).json({
                success: false,
                error: 'Email address already exist'
            });
        }
        const passwordHash = Bcrypt.hashSync(password, Bcrypt.genSaltSync(SALT_ROUNDS))
        let user = await DB.USER.create({
            email: email,
            password: passwordHash,
        });

        let loggedInUser = {
            id: user.id,
            username: user.email
        }

        req.login(loggedInUser, function(err) {
            if (err) { return next(err); }
            
            res.status(200).json({
                success: true,
                message: "User logged in",
                user: user.purge()
            });
        });
    },

    // userExist: async (email) => {
    //     return await DB.USER.findOne({
    //         where: { email }
    //     });
    // },

    validateUser: async (email, password) => {
        let userExist = await DB.USER.findOne({ where: { email }});
        if (userExist) {
            if (await Bcrypt.compare(password, userExist.password)) {
                return userExist
            }
        }
        return false;
    }
}

module.exports = UserService;