import express from "express"
import db from "../service/profissoesService.js"
import {body, validationResult} from 'express-validator'

const router = express.Router()

router.post('/',[
  body("nome_profissao").notEmpty().withMessage("nome da profissão não informado...")
], async (req, res) => {

  //Inserindo validação em uma constante
  const errors = validationResult(req)

  //verificando se errors não é vazia
  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array()})
  }
  
  const {nome_profissao} = req.body
  //Envia os dados para a userService.js
  await db.insertProfissao(nome_profissao)

    res.status(201).json({message:
      `${nome_profissao} foi cadastrado`
    })  
})

export default router