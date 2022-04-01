//?===================================IMPORTS========================================

import express  from "express";
import db from "../service/userService.js"

//?==================================================================================


//! criando constante para usar as rotas
const router = express.Router()

//! usando get na rota principal
router.get('/', (req, res) => {

  res.status(200).json({message:
    "Silêncio muleire, num sou maix brazalairo, sou ungolano, purquie, independientemiente di comu estivuer sua voida, seija felis, SURAYA"})
})

//! usando post na rota principal
router.post('/', async (req, res) => {

  const {email, password, user} = req.body
  //Envia os dados para a userService.js
  await db.insertUser(email, password, user)

  res.status(201).json({message:
    "Cadastrei um novo usuário"
  })
})

//! exportando o módulo "router"
export default router