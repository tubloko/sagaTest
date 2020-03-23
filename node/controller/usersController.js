const qs = require('qs');
const userManager = require('../managers/userManager');
const {md5} = require('../managers/securityManager');
const utils = require('./../utils');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(ctx) {
        const {name, password} = ctx.request.body;
        const findUser = await userManager.findOne(name, md5(password));
        if (!findUser) {
            return ctx.body = {
                error: true,
                status: 401,
                message: 'username or password is wrong.'
            }
        }

        const userData = {
            name: findUser.name,
            userId: findUser.userId,
            password: findUser.password,
            isAdmin: true,
        };

        const token = utils.generateToken(userData);
        const userObj = utils.getCleanUser(userData);

        return ctx.body = { user: userObj, token };
    },
    async checkToken(ctx) {
        const token = ctx.request.body.token || ctx.request.query.token;
        if (!token) {
            return ctx.body = {
                status: 400,
                error: true,
                message: "token is required."
            };
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return ctx.body = {
                status: 401,
                error: true,
                message: "Invalid token."
            };

            const findUser = await userManager.findOne(user.name, user.password);

            if (user.userId !== findUser.userId) {
                return ctx.response.body = {
                    status: 401,
                    error: true,
                    message: "Invalid user."
                };
            }
            const userObj = utils.getCleanUser(user);

            return ctx.body = { user: userObj, token };
        });
    },
    async register(ctx) {
        const {name, password} = ctx.request.body;
        try {
            ctx.session.userId = await userManager.addUser(name, password);
        } catch (e) {
            console.log(e);
            return;
        }
        ctx.session.name = name;
    },
};
