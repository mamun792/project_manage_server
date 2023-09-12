require("dotenv").config();
const exp=require("express");

const app=exp();

const port= process.env.PORT || 5000;


// licten for port
app.listen(port,(err)=>{
    if(err)  throw err;
    console.log(`server is running on port ${port}`);
    
});   