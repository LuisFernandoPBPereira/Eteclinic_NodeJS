//?===================================IMPORTS========================================

import express, { response }  from "express";
import db from "../service/userService.js"
import {body, validationResult} from 'express-validator'

//?==================================================================================


//! criando constante para usar as rotas
const router = express.Router()

//! usando get na rota principal
router.get('/', (req, res) => {

  res.status(200).json({message:
    "Silêncio muleire, num sou maix brazalairo, sou ungolano, purquie, independientemiente di comu estivuer sua voida, seija felis, SURAYA"})
})

//! usando post na rota principal
//!yarn add express-validator
router.post('/', [
  body("email").isEmail().withMessage("Email informado é invalido.")
], async (req, res) => {

  //Inserindo validação em uma constante
  const errors = validationResult(req)

  //verificando se errors não é vazia
  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array()})
  }
  
  const {email, password, user} = req.body
  //Envia os dados para a userService.js
  await db.insertUser(email, password, user)

    res.status(201).json({message:
      "Cadastrei um novo usuário"
    })  
})

//! exportando o módulo "router"
export default router