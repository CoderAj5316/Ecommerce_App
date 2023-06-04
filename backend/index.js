const express=require('express');
const app=express();
require('dotenv').config();
require("./dbconn/dbconn");
const cors=require("cors");
const PORT=process.env.PORT;
const userroute=require("./router/userroute");
app.use(express.json());
app.use(cors())
app.use(userroute);

app.listen(PORT,()=>{
    console.log(`server Running on ${PORT}`);
})   