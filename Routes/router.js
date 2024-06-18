const express=require('express')
const userController=require('../Controllers/userController')
const taskController = require('../Controllers/taskController')
const jwtMiddleWare = require('../Middlewares/jwtMiddleware')
const router= new express.Router()

router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/add-task',jwtMiddleWare,taskController.addTask)
router.get('/get-task',jwtMiddleWare,taskController.getUserTask)
router.put('/edit-task/:id',jwtMiddleWare,taskController.editTasks)
router.delete('/delete-task/:id',jwtMiddleWare,taskController.deleteTask)


module.exports=router 