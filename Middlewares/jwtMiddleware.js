const jwt=require('jsonwebtoken')

const jwtMiddleWare=(req,res,next)=>{
    console.log("inside jwt middleware");
    // console.log(req.headers);
    // console.log(req.body)
    try{
        const token=req.headers['authorization'].split(" ")[1]
        console.log(token);
        if(token){
            const jwtResponse=jwt.verify(token,process.env.JWT_SECRETKEY)
            // console.log(jwtResponse);
            req.payload=jwtResponse.userId
            //  console.log(req.payload);
            next()
        }else{
            res.status(406).json("Please Provide token...!!")
   
        }
    }catch{
        res.status(401).json("Access denied...Please Login")
    }
}
module.exports=jwtMiddleWare