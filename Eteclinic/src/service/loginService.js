import database from '../repository/connectionDB.js'

async function loginUser(email, password){
  const conn = await database.connect()
  
  const sql = "SELECT email, senha FROM tbl_usuarios WHERE email = ? AND senha = ?;"
  const findData = [email, password] 
  await conn.query(sql, findData)
  conn.end()//encerra a conexão do banco
}

export default {loginUser}