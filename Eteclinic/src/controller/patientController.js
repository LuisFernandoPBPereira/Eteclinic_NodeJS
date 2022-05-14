import express from "express"
import dbPatient from "../service/patientService.js"
import dbAdress from "../service/adressService.js"
import {body, validationResult} from 'express-validator'

const router = express.Router()

router.post('/', async (req, res) => {

  //Inserindo validação em uma constante
  const errors = validationResult(req)

  //verificando se errors não é vazia
  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array()})
  }

  const {cep, rua, numero, bairro, cidade, estado} = req.body
//Envia os dados para a userService.js
  await dbAdress.insertAdress(cep, rua, numero, bairro, cidade, estado)
  
  const {cpf, nome_cliente, telefone_cliente, celular_cliente,
         email_cliente,tipo_sanguineo, FK_id_endereco} = req.body
  //Envia os dados para a userService.js
  await dbPatient.insertPatient(cpf, nome_cliente, telefone_cliente, celular_cliente,
                                email_cliente,tipo_sanguineo, FK_id_endereco)

    res.status(201).json({message:
      `${nome_cliente} e endreço ${cep} foram cadastrados `
    })  
})

export default router