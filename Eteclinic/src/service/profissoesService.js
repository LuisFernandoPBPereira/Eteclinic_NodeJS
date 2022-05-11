import database from "../repository/connectionDB.js"

async function insertProfissao(nome_profissao){
  const conn = await database.connect()
  
  const sql = "INSERT INTO tbl_profissoes(nome_profissao) VALUES(?);"
  const insertData = [nome_profissao] 
  await conn.query(sql, insertData)
  conn.end()//encerra a conexão do banco
}

export default {insertProfissao}