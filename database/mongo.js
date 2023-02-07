const mongoose=require('mongoose');

const MongoDBConection=async()=>{

try{
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MongoDB);
    console.log('Conexion a Mongo satisfactoriamente');


}
catch(err){
    console.log(err);
    throw new Error('Ha ocurrido un error en la conexion a la base de datod');
}

}


module.exports=MongoDBConection;