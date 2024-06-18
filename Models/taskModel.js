const mongoose = require('mongoose')
const taskSchema= new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId:{type:String,required:true},
    completed: { type: Boolean, default: false }
  }, { timestamps: true })
   
    
const tasks=mongoose.model("tasks",taskSchema)
module.exports=tasks