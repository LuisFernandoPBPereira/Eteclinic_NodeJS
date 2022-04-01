import mysql from 'mysql2/promise'

//! Criando conexão com o Banco de Dados através de uma função
async function connect() {

  //! atribuindo a conexão a uma constante
  const connection = await mysql.
    createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'eteclinic'
    })
    return connection
}

//! Exportando função
export default {connect}
