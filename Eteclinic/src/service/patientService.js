import database from "../repository/connectionDB.js"

async function insertPatient(cpf, nome_cliente, telefone_cliente,
                             celular_cliente, email_cliente,
                             tipo_sanguineo, FK_id_endereco){

  const conn = await database.connect()
  
  const sql = "INSERT INTO tbl_clientes(cpf, nome_cliente, telefone_cliente, celular_cliente, email_cliente,tipo_sanguineo, FK_id_endereco) VALUES(?, ?, ?, ?, ? ,? ,?);"
  
  const insertData = [cpf, nome_cliente, telefone_cliente, celular_cliente,
                      email_cliente,tipo_sanguineo, FK_id_endereco] 
  
  await conn.query(sql, insertData)
  conn.end()//encerra a conexão do banco
}

export default {insertPatient}