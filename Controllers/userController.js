const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')
//register
exports.register=async(req,res)=>{
    console.log('REGISTER');
   const {userName,email,password}= req.body
   console.log(userName,email,password);
   try{
      const existingUser=await users.findOne({email})
      console.log(existingUser);
      if(existingUser){
         
         res.status(406).json("email already exist..please login")

      }else{
             const newuser=new users({
               userName,email,password
             })
             await newuser.save()
         res.status(200).json(newuser)
      }

   }catch(err){
      res.status(401).json(err)
   }
   
}
//login

exports.login=async(req,res)=>{
   console.log('LOGIN');
  const {email,password}= req.body
  console.log(email,password);
  try{
     const existingUser=await users.findOne({email,password})
     console.log(existingUser);
     if(existingUser){
        const token =jwt.sign({userId:existingUser._id},process.env.JWT_SECRETKEY)
      //   console.log(token);
        res.status(200).json({existingUser,token})

     }else{
         
        res.status(404).json("Invalid Email / Password!!")
     }

  }catch(err){
     res.status(401).json(err)
  }
  
}