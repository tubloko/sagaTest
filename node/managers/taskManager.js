const knex = require('./../knex');

const TABLE_NAME = 'tasks';

module.exports = {
    getAllTask () {
        return knex(TABLE_NAME).select();
    },
    async setTask (task) {
        await knex(TABLE_NAME).insert({ task: task, created_at: new Date() });
    },
    async deleteTask (id) {
        await knex(TABLE_NAME).where('taskId', id).delete();
    },
    async checkDone (id, done) {
        await knex(TABLE_NAME).update('done', done ? 0 : 1).where('taskId', id);
    },
};