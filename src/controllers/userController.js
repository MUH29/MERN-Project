const User = require('../models/userModel');

module.exports = {
    index(req,res){
        res.json({message: 'Hello World feito com user controller.'})
    },
    async create(req,res){
        //Definir variáveis do model e indicá-las como req.body;
        //Desse modo, teremos as informações que chegam do front-end
        const {name, email, user_type, password} = req.body;

        let data = {};

        //Fazer findOne para verificar se o e-mail do user já existe
        let user = User.findOne({email});

        //Caso não exista
        if(!user){
            
            data = {name, email, user_type, password};

            user = await User.create(data);

            return res.status(200).json(user);

        }else{
            return res.status(500).json(user);
        }
    }
}