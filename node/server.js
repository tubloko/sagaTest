require('dotenv').config();

const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const Router = require('koa-router');
const session = require('koa-session');
const jwt = require('jsonwebtoken');

const taskController = require('./controller/taskController');
const usersController = require('./controller/usersController');

const app = new Koa();

const router = new Router();
app.use(session({signed: false}, app));

router
    // .get('/checkToken',  usersController.checkToken)
    .get('/api/getAllTask', taskController.getAllTask)
    .post('/api/addTask', taskController.setTask)
    .post('/api/deleteTask', taskController.deleteTask)
    .post('/api/checkDone', taskController.checkDone)
    .post('/login', usersController.login)
    .post('/register', usersController.register);
    // .get('/login', usersController.userLogin);

app
    .use(bodyParser())
    .use(cors())
    .use(router.routes());
    // .use((req, res, next) => {
    //     let token = req.header['authorization'];
    //     if (!token) return next();
    //     console.log(token);
    //     token = token.replace('Bearer ', '');
    //     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //         if (err) {
    //             return res.status(401).json({
    //                 error: true,
    //                 message: 'Invalid user.'
    //             });
    //         } else {
    //             req.user = user;
    //             next();
    //         }
    //     });
    // });

app.listen(3030, () => {
    console.log('Server was started');
});
