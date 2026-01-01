//Imports
import fastify from 'fastify';
import dotenv from 'dotenv';
import { MySQLClient } from './database/database.js';
import { routes } from './routes.js';


const main = async () => {
    try {
        //Configurações
        dotenv.config();

        //Conexão com o banco de dados
        await MySQLClient.connect();

        //Variáveis
        const app = fastify({ logger: true });
        const PORT = Number(process.env.PORT);

        //Middlewares
        app.listen({ port: PORT }, () => console.log(`Server running on port ${PORT}`));
        app.register(routes);

    } catch (error) {
        console.error('Error starting server:', error);
    }
}

main();