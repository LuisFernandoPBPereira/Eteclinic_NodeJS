//?===================================IMPORTS========================================

import express  from "express";
import user from './controller/userController.js'
import login from './controller/loginController.js'
import profissoes from './controller/profissoesController.js'
import patient from "./controller/patientController.js"
import specialist from "./controller/specialistController.js"

//?==================================================================================

//! "importando as rotas"
const router = express.Router()

//! setando a rota "user"
router.use('/user', user)
router.use('/login', login)
router.use('/profissoes', profissoes)
router.use('/patient', patient)
router.use('/specialist', specialist)

//! exportando módulo "router"
export default router