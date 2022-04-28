import express from "express";

const router = express.Router();

router.post('/', (req, res) => {
  const {email, password} = req.body;
  console.log(`email: ${email}, senha: ${password}`);

  res.status(201).json({message:
    "deu bom"
  })  
})

export default router;