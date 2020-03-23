const taskManager = require('./../managers/taskManager');

module.exports = {
    async getAllTask (ctx) {
        const tasks = await taskManager.getAllTask();
        ctx.body = tasks;
    },
    async setTask (ctx) {
        const {task} = ctx.request.body;
        console.log(task);
        await taskManager.setTask(task);
    },
    async deleteTask (ctx) {
        const {id} = ctx.request.body;
        console.log(id);
        await taskManager.deleteTask(id);
    },
    async checkDone (ctx) {
        const {id, done} = ctx.request.body;
        console.log(id, done);
        await taskManager.checkDone(id, done);
    },
};
