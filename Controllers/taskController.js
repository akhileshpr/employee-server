const tasks = require('../Models/taskModel')
exports.addTask = async (req, res) => {
    console.log("inside add task API");
    const userId = req.payload
    const { title, description, completed = false } = req.body;
    // console.log(req.body);
    try {
        const newTask = new tasks({
            title,
            description,
            userId,
            completed
        });
    
        await newTask.save();
        // console.log(newTask);
        res.status(200).json(newTask);
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
};

//get user task
exports.getUserTask=async(req,res)=>{
    console.log("inside user task API");
  
    const userId=req.payload
    try{
    
      const userTask=await tasks.find({userId})
      res.status(200).json(userTask)
    }catch(err){
      res.status(401).json(err)
  
    }
  }

  //get all task
  // exports.getAllTask=async(req,res)=>{
  //   console.log("inside user task API");
  
  //   try{
    
  //     const userTask=await tasks.find()
  //     res.status(200).json(userTask)
  //   }catch(err){
  //     res.status(401).json(err)
  
  //   }
  // }

  //update
  exports.editTasks = async(req,res)=>{
    console.log("inside edit project");
    const {id} = req.params
    console.log(id);
    // console.log(req.params);
    const userId = req.payload
    //  console.log(userId);
    const {title,description,completed=false} = req.body
    try{
      const updatedProject = await tasks.findByIdAndUpdate({_id:id},{
        title,description,completed,userId
      },{new:true})
    await updatedProject.save()
    res.status(200).json(updatedProject)
    }catch(err){
      res.status(401).json(err)
    }
  
  }
  //delete
  exports.deleteTask = async(req,res)=>{
    console.log("inside delete project");
    const {id} =req.params
    console.log(id);
    try{
      const projectDetails =await tasks.findByIdAndDelete({_id:id})
      console.log(projectDetails);
    res.status(200).json(projectDetails)
    }catch(err){
      res.status(401).json(err)
    }
  }