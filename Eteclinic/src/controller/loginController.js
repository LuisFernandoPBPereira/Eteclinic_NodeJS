import express from "express";
import db from "../service/loginService.js"
import { generatedPassword } from "../helpers/resetPassword.js";
import { sendEmail } from "../helpers/sendEmail.js";

const router = express.Router();

router.post('/', async(req, res) => {
  const {email, password} = req.body;

  db.login(email, password)

  const validatedUser = await db.login(email, password);

  if(validatedUser.length > 0){
    const [name1, name2] = email.split("@")
    res.status(200).json({
      message: `Seja bem-vindo ${name1}!`
    })
  }
  else{
    res.status(401).json({
      message: `Login e/ou senha inválido(s)`
    })
  }
})

router.post('/reset', async(req, res) => {
   const {email} = req.body;

   const password = generatedPassword();

   const passReseted =  await db.reset(email, password)

   sendEmail(email, password)
   if(passReseted){
    res.status(200).json({
      message: `Senha atualizada`
    })
  }
})

export default router;