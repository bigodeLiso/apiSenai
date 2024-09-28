import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class Database {

    //COLABORADORES
    async listarColaboradores() {
        const colaboradores = await sql`select * from colaboradores`
        return colaboradores;
    }

    async criarColaborador(colaborador) {
        const id = randomUUID()
        await sql`INSERT INTO colaboradores (id, nome, senha)
        values (${id}, ${colaborador.nome}, ${colaborador.senha})`

        const colaboradores = await sql`select * from colaboradores`
        return colaboradores;
    }

    async editarColaborador(id, colaborador) {
        await sql`UPDATE colaboradores SET
        nome = ${colaborador.nome},
        senha = ${colaborador.senha}
        where id = ${id}`
    }

    async deletarColaborador(id){
        await sql`DELETE from colaboradores where id = ${id}`
    }

    //EPIS EQUIPAMENTOS
    async listarEpis() {
        const epis = await sql`select * from epis`
        return epis;
    }

    async criarEpi(epi) {
        const id = randomUUID()
        await sql`INSERT INTO epis (id, nome, descricao, tipo, emprestado, colaborador_que_pegou_emprestado)
        values (${id}, ${epi.nome}, ${epi.descricao}, ${epi.tipo}, ${epi.emprestado}, ${epi.colaborador_que_pegou_emprestado})`

        const eqp = await sql`select * from epis`
        return eqp;
    }

    async editarEpi(id, epis) {
        await sql`UPDATE epis SET
        nome = ${epis.nome},
        descricao = ${epis.descricao},
        tipo = ${epis.tipo},
        emprestado = ${epis.emprestado},
        colaborador_que_pegou_emprestado = ${epis.colaborador_que_pegou_emprestado}
        where id = ${id}`
    }

    async deletarEpi(id){
        await sql`DELETE from epis where id = ${id}`
    }

}