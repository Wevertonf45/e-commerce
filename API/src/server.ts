//Imports
import fastify from 'fastify';
import dotenv from 'dotenv';


const main = async () => {
    //Configurações
    dotenv.config();
    
    //Variáveis
    const app = fastify({ logger: true });
    const PORT = Number(process.env.PORT);

    //Middlewares
    app.listen({ port: PORT });
}

main();