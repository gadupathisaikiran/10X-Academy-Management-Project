let mongoose=require("mongoose")

let express=require("express")
const { mainModule } = require("process")
let router=require("./router")

let app=express()


app.use("/",router)

const main=async()=>{

    mongoose.connect('mongodb://127.0.0.1/codetest').then(()=>{

    console.log("connect to mongodb")
    })

}

main()


app.listen(5002,()=>{
   console.log( "port is listening")
})