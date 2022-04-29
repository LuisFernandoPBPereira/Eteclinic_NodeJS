import database from '../repository/connectionDB.js'

async function login(email, password){
  const conn = await database.connect()
  
  const sql = "SELECT * FROM tbl_usuarios WHERE email = ? AND senha = ?;"
  const findData = [email, password] 
  const [rows] = await conn.query(sql, findData)
  
  conn.end()//encerra a conexão do banco
  return rows
}

export default {login}