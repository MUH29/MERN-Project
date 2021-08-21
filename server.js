const path = require('path');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function(req,res){
    res.json({message: 'Hello World'})
})

app.listen(port, function(){
    console.log(`Servidor está rodando na porta ${port}`)
})