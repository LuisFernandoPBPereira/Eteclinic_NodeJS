//?===================================IMPORTS========================================

import express  from "express";
import user from './controller/userController.js'

//?==================================================================================

//! "importando as rotas"
const router = express.Router()

//! setando a rota "user"
router.use('/user', user)

//! exportando módulo "router"
export default router