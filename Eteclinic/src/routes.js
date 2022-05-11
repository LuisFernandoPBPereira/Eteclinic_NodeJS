//?===================================IMPORTS========================================

import express  from "express";
import user from './controller/userController.js'
import login from './controller/loginController.js'
import profissoes from './controller/profissoesController.js'

//?==================================================================================

//! "importando as rotas"
const router = express.Router()

//! setando a rota "user"
router.use('/user', user)
router.use('/login', login)
router.use('/profissoes', profissoes)

//! exportando módulo "router"
export default router