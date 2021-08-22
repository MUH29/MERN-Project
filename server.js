const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mern-database', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexão com o MongoDB estabelecida com sucesso!')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, function(){
    console.log(`Servidor está rodando na porta ${port}`)
})