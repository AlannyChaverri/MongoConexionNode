const express=require('express');
require('dotenv').config();
const MongoDBConection=require('../database/mongo');


class Server{
constructor(){
   this.app=express();
   this.port=process.env.PORT;
   this.usersPath='/api/users'

   //invocamos nuestros metodos
   this.middleWares();
   this.routes();
   this.MongoDBConect();
}




listen(){
    this.app.listen(this.port,()=>{
        console.log(`El servidor esta corriendo en el puerto ${this.port}`);
    });
}


routes(){
this.app.use(this.usersPath,require('../routes/users'));
}

middleWares(){
    this.app.use(express.json());
    this.app.use(express.static('public'))
}

MongoDBConect(){
    MongoDBConection();
}


}



module.exports=Server;