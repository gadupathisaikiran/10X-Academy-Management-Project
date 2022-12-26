let router=require("express").Router()
let classes=require("./model")
let student=require("./studentmodel")
let bosyparser=require("body-parser")
let id=50

router.use(bosyparser.json())

// get all classses

router.get("/v1/myClass",async(req,res)=>{

  

    try{

         let getclass=await classes.find({classes})
        
      res.send({
        classes:getclass,

        status:"list of classes"
      })


    }
    catch(e){
        res.send(e.message)
    }
    
})

// get class by id


router.get("/v1/myClass/:myClassId",async(req,res)=>{

  let clasid=req.params.myClassId

    try{

         let getclassbyid=await classes.find({Id:clasid})
        
      res.send({
        status:"class by id",

        classbyid:getclassbyid,

        
      })


    }
    catch(e){
        res.send(e.message)
    }
    
})










// create classes
let cId=1
router.post("/v1/myClass",async(req,res)=>{

  

    try{
     
         let creatclass=await classes.create({class:req.body.class,studentcount:req.body.studentcount,Id:cId++})

        
      res.send({
        classid:cId,
        status:"created sucessfully"
      })

    id++


    }
    catch(e){
        res.send(e.message)
    }
    
})




// get student by id

router.get("/v1/myClass/:myClassId/students/:studentId",async(req,res)=>{

    let _id=req.params.studentId
  

    try{

         let getstudent=await student.find({studentId:_id})
        
      res.send({
        result:getstudent,
        status:"sucess"
      })


    }
    catch(e){
        res.send(e.message)
    }
    
})

// register new student


router.post("/v1/myClass/:myClassId/students",async(req,res)=>{

    
  
  id++ 
    try{
       
         let poststudent=await student.create({name:req.body.name,classId:req.body.classId,studentId:id})
         
      res.send({
        studentId:id,
        status:"student details created sucessfully"
      })
   

    }
    catch(e){
        res.send(e.message)
    }
    
})


// update student details

router.put("/v1/myClass/:myClassId/students/:studentId",async(req,res)=>{

    let _id=req.params.studentId
  

    try{

         let getstudent=await student.findOneAndUpdate({studentId:_id},{name:req.body.name,classId:req.body.classId,studentId:_id})
        
      res.send({
        result:getstudent,
        status:"sucess"
      })


    }
    catch(e){
        res.send(e.message)
    }
    
})

//delete a student by id 

router.delete("/v1/myClass/:myClassId/students/:studentId",async(req,res)=>{

    let _id=req.params.studentId
  

    try{

         let getstudent=await student.findOneAndDelete({studentId:_id})
        
      res.send({
        
        status:"deleted sucessfully"
      })


    }
    catch(e){
        res.send(e.message)
    }
    
})


// delete specified class



router.delete("/v1/myClass/:myClassId",async(req,res)=>{

    let _id=req.params.myClassId
  

    try{

         let getstudent=await classes.findOneAndDelete({Id:_id})
        
      res.send({
        
        status:"class is deleted sucessfully"
      })


    }
    catch(e){
        res.send(e.message)
    }
    
})


// get all student details


router.get("/v1/myClass/:myClassId/students",async(req,res)=>{

    
  
    id++ 
      try{
         
           let getallstudents=await student.find()
           
        res.send({
            status:"student details ",
          studentList:getallstudents
          
        })
     
  
      }
      catch(e){
          res.send(e.message)
      }
      
  })












module.exports=router