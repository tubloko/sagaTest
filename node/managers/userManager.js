const knex = require('../knex');
const {md5} = require('./securityManager');

const TABLE_NAME = 'users';

module.exports = {
    async addUser (name, password) {
        const [userId] = await knex(TABLE_NAME).insert( {name: name, password: md5(password)} );

        return userId;
    },
    findAllUsers: () => knex(TABLE_NAME).select(),
    async findOne (name, password) {
        // return {name: 'rus', password: '123', userId: '2'};
        const [user] = await knex(TABLE_NAME)
            .select()
            .where('name', name)
            .where('password', password);

        return user;
    }
};
