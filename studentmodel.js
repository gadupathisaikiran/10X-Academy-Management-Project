let mongoose=require("mongoose")
const Schema = mongoose.Schema;

let studentmodel=new Schema({

name:String,
classId:Number,
studentId:Number

})

let student=mongoose.model("student",studentmodel)

module.exports=student