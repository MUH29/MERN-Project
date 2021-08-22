const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    user_type: {type: Number, default: 1},
    password: String,
},{
    timestamps: true
})

//Criptografia de senha
dataSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }else{
        this.password = bcrypt.hashSync(this.password, 10);
        next();
    };
});

const users = mongoose.model('Users', dataSchema);

module.exports = users;