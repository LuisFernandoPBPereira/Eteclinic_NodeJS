import database from '../repository/connectionDB.js'

async function login(email, password){
  const conn = await database.connect()
  
  const sql = "SELECT * FROM tbl_usuarios WHERE email = ? AND senha = ?;"
  const findData = [email, password] 
  const [rows] = await conn.query(sql, findData) 
  
  conn.end()//encerra a conexão do banco
  return rows
}

async function reset(email, password) {
  const conn = await database.connect();
  const sql = 'UPDATE tbl_usuarios SET senha = ? WHERE email = ?;'
  const resetData = [password, email]
  conn.query(sql, resetData);
  conn.end();

  return true
}

export default {login, reset}