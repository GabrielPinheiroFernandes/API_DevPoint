import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '',
    database: 'seu_bd',  
    connectionLimit: 5
});

async function connectToDatabase() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("Conectado ao banco de dados MariaDB");
        return conn;
    } catch (err) {
        console.log("Erro ao conectar com o banco: " + err.message);
    }
}

connectToDatabase();

export { pool };
