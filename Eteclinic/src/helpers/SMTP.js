const config = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'youremail@gmail.com' ,
    pass: '*yourpassword*'
  },
  tls: {
    rejectUnauthorized: false,
  }
}

export {config}