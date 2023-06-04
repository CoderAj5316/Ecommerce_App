const mongoose=require('mongoose');
// const colors=require('colors');
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce2023").then(()=>{
    console.log("DataBase Connection Succesfull");
}).catch((e)=>{
    console.log(`error ${e}`);
})