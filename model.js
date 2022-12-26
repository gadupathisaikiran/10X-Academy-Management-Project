let mongoose=require("mongoose")

const Schema = mongoose.Schema;

let model=new Schema({

    class:String,
    studentcount:Number,
    Id:Number

})

let classes=mongoose.model("classe",model)

module.exports=classes