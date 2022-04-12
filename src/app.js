const express = require("express")
const app = express()



app.get('/test',(req,res)=>{
  res.status(200).send("Hello World")
})

app.get("/", (req, res) => {
    res.status(200).send("Bem-vindo ao meu servidor")
});

module.exports = app