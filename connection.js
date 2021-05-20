const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://Arwins3125:soraidacordoba2014@cluster0.lbnub.mongodb.net/arwinsDataCorp?retryWrites=true&w=majority';

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('la base de datos esta corriendo xD');
    };
});
