import express from "express"
import dbSpecialist from "../service/specialistService.js"
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
  
  const {registro, nome_especialista, telefone_especialista,
    celular_especialista, email_especialista, 
    FK_id_endereco, FK_id_profissao} = req.body
  //Envia os dados para a userService.js
  await dbSpecialist.insertSpecialist(registro, nome_especialista, telefone_especialista,
                                   celular_especialista, email_especialista, 
                                   FK_id_endereco, FK_id_profissao)

    res.status(201).json({message:
      `${nome_especialista} e endreço ${cep} foram cadastrados `
    })  
})

export default router