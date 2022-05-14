import database from "../repository/connectionDB.js"

async function insertSpecialist(registro, nome_especialista, telefone_especialista,
                             celular_especialista, email_especialista, 
                             FK_id_endereco, FK_id_profissao){

  const conn = await database.connect()
  
  const sql = "INSERT INTO tbl_especialistas(registro, nome_especialista, telefone_especialista, celular_especialista, email_especialista, FK_id_endereco, FK_id_profissao) VALUES(?, ?, ?, ?, ? ,? ,?);"
  
  const insertData = [registro, nome_especialista, telefone_especialista,
                      celular_especialista, email_especialista, 
                      FK_id_endereco, FK_id_profissao] 
  
  await conn.query(sql, insertData)
  conn.end()//encerra a conexão do banco
}

export default {insertSpecialist}