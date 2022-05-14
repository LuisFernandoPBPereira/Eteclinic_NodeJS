import database from "../repository/connectionDB.js"

async function insertAdress(cep, rua, numero, bairro, cidade, estado){

  const conn = await database.connect()
  
  const sql = "INSERT INTO tbl_enderecos(cep, rua, numero, bairro, cidade, estado) VALUES(?, ?, ?, ?, ? ,?);"
  
  const insertData = [cep, rua, numero, bairro, cidade, estado] 
  
  await conn.query(sql, insertData)
  conn.end()//encerra a conexão do banco
}

export default {insertAdress}