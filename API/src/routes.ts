import type { FastifyPluginOptions, FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { MysqlGetUsersRepository } from './repositories/MysqlGetUsers.js';
import { GetUsersController } from './controllers/getUsers/getUsers.js';

export const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
    fastify.get('/list', async (req: FastifyRequest, res: FastifyReply) => {
        const MYSQLGetUsers = new MysqlGetUsersRepository();
        const getUsersController = new GetUsersController(MYSQLGetUsers);
        const { statusCode, body } = await getUsersController.handle();
        res.status(statusCode).send(body);
    })
};