const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

function userSave (req, res) {
    const userG = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        role: 'ROLE_ADMIN',
        image: 'NULL' 
    });
    if(req.body.password != null){
        bcrypt.hash(req.body.password, null, null, (err, hash) =>{
            userG.password = hash;
            if(userG.name != null && userG.surname != null &&userG.email != null){
                userG.save((err, data) =>{
                    if(err){
                        res.send({message: "hubo un error al guardar, intentelo nuevamente"});
                    }else{
                        res.status(200).send(data);
                    };
                });
            }else{
                res.status(404).send({message: "porfavor ingrese todo los datos"});
            };
        });
    }else{
        res.status(500).send({message: "ingrese la contraseña porfavor"});
    };
};

module.exports = {
    userSave
}
