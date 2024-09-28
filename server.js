import { fastify } from "fastify"
import { Database } from "./database.js"
import cors from '@fastify/cors'

const servidor = fastify();
const database = new Database;

servidor.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

//COLABORADORES 

servidor.get('/colaboradores', async () => {
    return await database.listarColaboradores();
})

servidor.post('/colaborador', async (request) => {
    return await database.criarColaborador(request.body);
})

servidor.put('/colaborador/:id', async (request) => {
    return await database.editarColaborador(request.params.id, request.body);
})

servidor.delete('/colaborador/:id', async (request) => {
    return await database.deletarColaborador(request.params.id);
})

//EPIS 
servidor.get('/epis', async () => {
    return await database.listarEpis();
})
servidor.post('/epi', async (request) => {
    return await database.criarEpi(request.body);
})

servidor.put('/epi/:id', async (request) => {
    return await database.editarEpi(request.params.id, request.body);
})

servidor.delete('/epi/:id', async (request) => {
    return await database.deletarEpi(request.params.id);
})

servidor.listen({
    port: 3333
});
