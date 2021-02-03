const express = require("express");
const app = express();
const porta = 3000;





app.get("/", (req, res)=> {
    res.send(`<img src="https://exame.com/wp-content/uploads/2016/09/size_960_16_9_era-do-gelo.jpg">`);
})

app.listen(porta, console.log("Servidor funcionando na porta 3000"));

