const mongoose= require('mongoose')
const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb connected succesfully with taskmanager server");
}).catch((reason)=>{
     console.log(reason);
     console.log("MogoDb Connection Failed");
})