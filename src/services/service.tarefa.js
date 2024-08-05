import {pool} from "./../config/database.js"

let sql = '';

async function Listar(body,Functioncallback) {
    let conn;
    try {
        console.log(body)
        conn = await pool.getConnection();
        let sql = body.Qparams ? 'SELECT * FROM tarefas WHERE id_tarefa = id_tarefa AND ' + body.Qparams  : 'SELECT * FROM tarefas';

        sql = sql + ' ORDER BY concluido'
        console.log(sql)
        const rows = await conn.query(sql);
        Functioncallback(null, rows);



    } catch (err) {
        Functioncallback(err, null);

    } finally {
        if (conn) conn.release(); // Libera a conexão de volta ao pool
    }
}


async function Inserir(body, Functioncallback) {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = "INSERT INTO tarefas (descricao, concluido) VALUES (?, ?) RETURNING id_tarefa";

        const result = await conn.query(sql, [body.descricao,body.concluido]);

        Functioncallback(null, result);
    } catch (err) {
        Functioncallback(err, null);
    } finally {
        if (conn) conn.release(); // Libera a conexão de volta ao pool
    }
}


async function Editar(id_tarefa,body,Functioncallback){
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'UPDATE tarefas SET descricao=?, concluido=? WHERE id_tarefa=? ';
        const rows = await conn.query(sql,[body.descricao,body.concluido,id_tarefa]);

        Functioncallback(null, id_tarefa);



    } catch (err) {
        Functioncallback(err, null);
    } finally {
        if (conn) conn.release(); // Libera a conexão de volta ao pool
    }
}


async function Excluir(id_tarefa,Functioncallback){
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'DELETE FROM tarefas WHERE id_tarefa=?';
        const rows = await conn.query(sql,id_tarefa);
        Functioncallback(null, rows);



    } catch (err) {
        Functioncallback(err, null);
    } finally {
        if (conn) conn.release(); // Libera a conexão de volta ao pool
    }
}


export default {Listar,Inserir,Editar,Excluir}