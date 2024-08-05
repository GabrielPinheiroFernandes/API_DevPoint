import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'fn01', 
    user: 'root', 
    password: 'lua133',
    database: 'celke',  
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
